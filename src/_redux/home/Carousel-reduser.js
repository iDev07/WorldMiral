const Carousel_Img = "Carousel_Img";
const InitialState = {
  carousel: [],
};
const CarouselReduser = (state = InitialState, action) => {
  switch (action.type) {
    case Carousel_Img:
      return { ...state, carousel: [...state.carousel, ...action.carousel] };
    default:
      return state;
  }
};
export const CarouselAC = (carousel) => ({ type: Carousel_Img, carousel });
export default CarouselReduser;
