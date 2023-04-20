export const getActions = (host: string, gameId: string) => [
  {
    id: '0',
    actionUrl: `https://${host}/${gameId}/actions/${0}`,
    imageUrl: 'https://storage.googleapis.com/saasify-assets/c0.jpg',
    name: 'Go on a crazy adventure with Ed',
    description:
      'Take a trip with Ed and Ein on a motorycle and a desert planet. Make the story super zany and fun.'
  },
  {
    id: '1',
    actionUrl: `https://${host}/${gameId}/actions/${1}`,
    imageUrl: 'https://storage.googleapis.com/saasify-assets/c1.jpg',
    name: 'Visit a bar with Jet',
    description:
      'Visit a dive bar with Jet in the underbelly of a distant planet. Make the story dark and gritty.'
  }
]
