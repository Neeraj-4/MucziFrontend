import { Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 50%;
    &>div::-webkit-scrollbar{
        overflow: hidden;
    }
`
const Heading = styled(Typography)`
margin-left: 20px;
font-weight: 600;
letter-spacing:.01cm;
word-spacing:.1cm;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
@media screen and (min-width: 1200px) {
gap: 30px;
margin-left: 35px;

}
`
const Wrap = styled(Box)`
overflow-x: auto;
overflow-y: hidden;
display: flex;
flex-wrap: nowrap;
gap: 5px;
justify-content: flex-start;
align-items: center;
padding: 10px;
@media screen and (min-width: 1200px) {
gap: 30px;
margin-left: 20px;

}
`
const Container = styled(Link)`  
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
    cursor: pointer;
    color: inherit;
   text-decoration: none;
`
const Text = styled(Typography)`
font-size: 12px;
font-weight: 600;
color: inherit;
max-width: 270px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const Items = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 2px;
`
const TextWrap = styled(Box)`
max-width: 150px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const PartySong = ({ album,name, title}) => {
    return (

        <Component>
            <Heading variant='h6'>{title}</Heading>
            <Wrap>
                {
                    album.map((song) => {
                          return (
                            <Container to={`/${name}/${song.id}` || `/${song.id}/${name}`} key={song.id} >
                                <Box>
                                <img src={song.url} alt="connot load" style={{ maxWidth: 160,height:160,objectFit:'contain' }} />
                                <Items>
                                    <TextWrap>
                                        <Text variant='p'>{song.title}</Text>
                                    </TextWrap>
                                </Items>
                                </Box>
                            </Container>
                        )
                    })
                }
            </Wrap>

        </Component>
    )
}

export default PartySong