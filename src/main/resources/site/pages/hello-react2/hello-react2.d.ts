export type HelloPageConfig = {
  greeting: string
  greetee: string
  things: string
  startCount: number
}

export type HelloProps = {
  message: HelloPageConfig['greeting']
  messageTarget: HelloPageConfig['greetee']
  droppableThing: HelloPageConfig['things']
  initialCount: HelloPageConfig['startCount']
}

// Adding the page configuration to the global XP type map.
declare global {
  interface XpPageMap {
    'com.enonic.app.samples-react4xp:hello-react2': HelloPageConfig
  }
}
