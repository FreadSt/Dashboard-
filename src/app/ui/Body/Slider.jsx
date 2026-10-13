import { useState } from "react"

const sliderArr = [
  {
    id:1,
    title: 'asasasda', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png'
  },
  {
    id:2,
    title: 'asasasda', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png'
  },
  {
    id:3,
    title: 'asasasda', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png'
  },
  {
    id:4,
    title: 'asasasda', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png'
  },
]


const SliderItem = ({title, id, img, }) => {
  return(
    <div className="w-full shrink-0">
      <img className='object-cover w-full' alt="img" src={img}/>
      <p>{title}</p>
    </div>
  )
}

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % sliderArr.length )
  }
  
  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? sliderArr.length - 1 : prev - 1)

  }

  return(
      <div className="overflow-hidden w-1/2 relative mx-auto">
            <button className="absolute right-0 top-[50%] z-999" onClick={nextSlide}>{`>`}</button>

        <div className="flex transition-transform duration-300" 
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
              >
              {sliderArr?.map((item, i) => (
                <div key={item.id}
                  className="flex shrink-0 w-full"
                >
                  <SliderItem 
                    id={item.id}
                    img={item.img}
                    title={item.title}
                  />
                </div>
              ))}
        </div>       

            <button className="absolute z-999 left-0 top-[50%]" onClick={prevSlide}>{`<`}</button> 

      </div>
  )
}