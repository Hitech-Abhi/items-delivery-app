import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../CarouselButtonGroup';
import { ProductItemDetailed } from '../../utils/types';

const responsive = {
  lgdesktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1440, min: 992 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

type Props = {
  data: ProductItemDetailed[];
  onSelect: (arg: number) => void;
};

const VarientItem = ({
  data,
  onSelect,
}: {
  data: any;
  onSelect: () => void;
}) => {
  return (
    <div
      onClick={() => onSelect()}
      className={`rounded-lg max-w-[120px] border overflow-hidden leading-none cursor-pointer ${
        data.selected ? 'border-[#b1dc9c]' : '_border-muted'
      } `}
    >
      <div className="py-2 px-3 flex items-center">
        <div className="w-8 pl-1">
          <input type="radio" checked={data.selected} readOnly />
        </div>
        <div>
          <p className="font-bold text-[15px]">{data.unit}</p>
          <span className="text-xs">
            {data.price}
            <del className="ml-1 opacity-80">{data.mrp}</del>
          </span>
        </div>
      </div>
      {data.selected && data.offer && (
        <div className="text-[11px] text-center font-bold bg-[#ecffec] border-t border-[#b1dc9c] text-[#54b226] py-2 px-3">
          {data.offer}
        </div>
      )}
    </div>
  );
};

const ProductVarients = ({ data, onSelect }: Props) => {
  const varientList = data.map((item) => {
    const { product_id, price, mrp, unit, offer } = item;
    return { product_id, price, mrp, unit, offer };
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleVarientChange = (e: number) => {
    setCurrentIndex(() => e);
    onSelect(e);
  };

  console.log('varientList', varientList);
  return (
    <div className="relative">
      <div className="overflow-auto w-full max-w-[400px] md:max-w-[500px] -mx-2">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          shouldResetAutoplay={false}
          infinite={false}
          itemClass="mx-1"
        >
          {varientList.map((varient, i) => (
            <VarientItem
              key={`var-${i}`}
              data={{ ...varient, selected: currentIndex === i }}
              onSelect={() => handleVarientChange(i)}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductVarients;
