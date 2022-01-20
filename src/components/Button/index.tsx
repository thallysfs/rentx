import React from 'react'
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components'

import { Container, Title } from './styles'

interface Props {
    title: string;
    color?: string;
    onPress: () =>void;
    enabled?: boolean;
    loading?: boolean;
}

export function Button({
  title, 
  color,
  enabled = true,
  loading = false, 
  ...rest
}: Props){
  const theme = useTheme();


  return(
    <Container {...rest} 
      color={color ? color : theme.colors.main}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1}}
    >
      { /* Se o loadin estiver ativo o Active indicator será exibido ao invés do nome */
        loading 
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title>{title}</Title>
      }
    </Container>
  )
}
