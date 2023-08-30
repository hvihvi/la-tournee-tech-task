import { getProduct } from "@/app/api/product/product";

type Props = { params: { id: string } };

const Produit = async ({ params: { id } }: Props) => {
  const product = await getProduct({ id });
  return <p>Id: {id}</p>;
};

export default Produit;
