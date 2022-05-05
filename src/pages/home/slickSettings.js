export const slickSettings = {
  className: 'center',
  infinite: true,
  centerPadding: '60px',
  speed: 1000,
  slidesToScroll: 3,
  adaptiveHeight: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        speed: 500,
        slidesToScroll: 1
      }
    }
  ]
}