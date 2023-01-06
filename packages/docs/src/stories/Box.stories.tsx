import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@devfloydbr-ui/react'

export const Primary: StoryObj<BoxProps> = {}

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Teste</Text>
      </>
    ),
  },
} as Meta<BoxProps>
