import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
// import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon - Home page</title>
      </Head>
      <Header />
{/* when applying 2xl we should center our elements as well,so we add mx-auto */}
   <main className='max-w-screen-2xl mx-auto'>
     {/* Banner */}
      <Banner />

     {/* product feed */}
     {/* <ProductFeed products={products} /> */}
     
   </main>
  

   
    </div>
  );
}

// tells next.js this is not a static page

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(response => response.json())

  return { props: {
    products
  } }
}