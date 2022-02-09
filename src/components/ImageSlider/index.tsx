import React, { useRef, useState } from 'react'
import { FlatList, ViewToken } from 'react-native'
import { Bullet } from '../Bullet';
import { 
    Container,
    ImageIndices,
    CarImageWrapper,
    CarImage, 
} from './styles'

interface Props {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({imagesUrl}: Props){
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
    });

  return(
    <Container>
        <ImageIndices>
            {
                // o map possui dois parâmetros, o item(o item em si que percorremos) e o index(a posição do item no array)
                // ao usar o underline, eu oculto o primeiro parâmetro vistoque não irei usa-lo
                imagesUrl.map((_, index) => (
                    <Bullet
                        key={String(index)} 
                        active={index === imageIndex}
                    />
                ))
            }
        </ImageIndices>

        
            <FlatList 
                data={imagesUrl}
                keyExtractor={ key => key}
                renderItem={({item}) => (
                    <CarImageWrapper>
                        <CarImage 
                            source={{uri: item }}
                            resizeMode='contain'
                        />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChanged.current}
            />
        
      
    </Container>
  )
}
