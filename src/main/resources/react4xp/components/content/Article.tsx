import {componentRegistry} from '/react4xp/componentRegistry';
import {RichText} from "@enonic/react-components";
import React from 'react';
import styles from './Article.module.css';


export const Article = (props) => {
    const {title, blocks, coverImage, preface, author, tags, spotlight} = props; // Include new props

    return (
        <div className={styles.article}>

        {/* Article Header */}
            <header className={styles.header}>
                <h1>{title}</h1>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Cover Image */}
                {coverImage && (
                    <div className={styles.coverImageContainer}>
                        <img
                            src={coverImage}
                            alt={title}
                            className={styles.coverImage}
                        />
                    </div>
                )}
                <div className={styles.flexy}>

                    {/* spotlight */}
                    {spotlight.length > 0 && (
                        <section className={styles.spotlight}>
                            <h3>Spotlight</h3>
                            <ul>
                                {spotlight.map((spotlight, index) => (
                                    <li key={index}>
                                        <a className={styles.sneakyLink} href={spotlight.url}><img
                                            src={spotlight.photoUrl} alt={spotlight.name}/></a>
                                        <p>
                                            <a className={styles.sneakyLink}
                                               href={spotlight.url}><strong>{spotlight.name}</strong></a>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    <div className={styles.blocky}>
                        {/* Preface */}
                        {preface && (
                            <p className={styles.preface}>
                                {preface}
                            </p>
                        )}

                        {/* Author */}
                        {author && (
                            <p className={styles.author}>
                                <strong>By:</strong> {author}
                            </p>
                        )}
                    </div>
                </div>

            </header>

            {/* Dynamic Content Blocks */}
            <main className={styles.blocks}>
                {blocks.map((block, index) => {
                    // Render Text Block
                    if (block.type === 'text') {
                        return (
                            <section key={index} className={styles.textBlock}>
                                {/* Use processed HTML */}
                                <RichText data={block.text} componentRegistry={componentRegistry}/>
                            </section>
                        );
                    }

                    // Render Banner Block
                    if (block.type === 'banner') {
                        return (
                            <section key={index} className={styles.banner}>
                                <div>
                                    <img
                                        className={styles.bannerImage}
                                        src={block.banner.imageUrl}
                                        title={block.banner.text}
                                        alt={block.banner.text}
                                    />
                                    <p className={styles.bannerText}>{block.banner.text}</p>
                                </div>
                            </section>
                        );
                    }

                    // Render Quote Block
                    if (block.type === 'quote') {
                        return (
                            <section key={index} className={styles.quoteBlock}>
                                <blockquote className={styles.quote}>
                                    <p>"{block.quote.text}"</p>
                                    {block.quote.byline && (
                                        <cite className={styles.byline}>
                                            - {block.quote.byline}
                                        </cite>
                                    )}
                                </blockquote>
                            </section>
                        );
                    }

                    // Render Story Block
                    if (block.type === 'story') {
                        return (
                            <>
                                <h3>Scroll-story</h3>
                                <section key={index} className={styles.storyBlock}>
                                    <div className={styles.storyScroll}>
                                        {block.story.map((panel, panelIndex) => (
                                            <div key={panelIndex} className={styles.storyPanel}>
                                                <img
                                                    src={panel.imageUrl}
                                                    alt={panel.storyline}
                                                />
                                                <div>
                                                    <p className={styles.storyline}>{panel.storyline}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </>
                        );
                    }

                    return null;
                })}
            </main>
        </div>
    );
};

