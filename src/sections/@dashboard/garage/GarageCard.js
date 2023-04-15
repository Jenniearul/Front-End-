import { Box, Card, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

export default function GarageCard() {

  return (
    <Card>

      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg alt={'jennie'} src={'https://images.vexels.com/media/users/3/238024/isolated/preview/71dd1b431f71f3e7bca9a409134ce01d-small-van-back-realistic.png'} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          Jennie Priyanka
        </Typography>
      </Stack>
    </Card>
  );
}
