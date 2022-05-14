import { FC, ReactNode } from 'react'

import { styled, theme } from 'src/stitches.config'

import { OverflowY } from '../wrappers'

interface TableProps {
  children?: ReactNode
}

export const Table: FC<TableProps> = ({ children, ...otherTableProps }) => {
  return (
    <OverflowY>
      <TableElement {...otherTableProps}>{children}</TableElement>
    </OverflowY>
  )
}

export const TableElement = styled('table', {
  maxWidth: '100%',
  width: '100%',
  borderCollapse: 'collapse',
  borderRadius: 6,

  '--saturation': theme.saturation.grey,
  '--hue': theme.hue.blue,
  '--border-light': theme.light.actor300,
  border: '1px solid',
  borderColor: 'hsl(var(--hue) var(--saturation) var(--border-light))'
})

export const Td = styled('td', {
  padding: '6px 12px',
  textAlign: 'left',

  '--saturation': theme.saturation.grey,
  '--hue': theme.hue.blue,
  '--border-light': theme.light.actor300,
  border: '1px solid',
  borderColor: 'hsl(var(--hue) var(--saturation) var(--border-light))',

  variants: {
    align: {
      right: { textAlign: 'right' },
      left: {}
    }
  }
})

export const Th = styled('th', {
  padding: '6px 12px',
  textAlign: 'left',
  fontWeight: 600,

  '--light': theme.light.frontStage,
  '--saturation': theme.saturation.grey,
  '--hue': theme.hue.blue,
  '--border-light': theme.light.actor300,
  border: '1px solid',
  borderColor: 'hsl(var(--hue) var(--saturation) var(--border-light))',
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  variants: {
    align: {
      right: { textAlign: 'right' },
      left: {}
    }
  }
})
