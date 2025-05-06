import {componentRegistry} from '/react4xp/componentRegistry';
import {RichText} from '@enonic/react-components';

...

export const Person = (props) => {
    const {parent, displayName, photo, restPhotos, bioHtml, birthDate} = props as any;

...

    {
        bioHtml && (
            <>
                <h2>Bio</h2>
                <div className={styles.richText}>
                    <RichText
                        data={bioHtml}
                        componentRegistry={componentRegistry}
                        loading="lazy"
                    />
                </div>
            </>
        )
    }
</div>
)
}
