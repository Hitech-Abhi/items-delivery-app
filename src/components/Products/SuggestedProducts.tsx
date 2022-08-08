import { ProductRow } from '../../utils/types';
import { ItemsCarousel } from '../home';

const SuggestedProducts = ({ objects }: ProductRow) => {
  const products = objects.map((obj) =>
    obj.data.products.map((product: any) => product[0])
  )[0];

  return (
    <section>
      <div className="flex items-center justify-between h-16">
        <h2 className="font-semibold text-[24px] _text-default">
          You might also like
        </h2>
      </div>
      <ItemsCarousel topItems={products} />
    </section>
  );
};

export default SuggestedProducts;
