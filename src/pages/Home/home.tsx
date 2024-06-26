import Hero from "./sections/hero/hero";
import Products from "./sections/products/products";
import Servies from "./sections/servies/servies";
import Company from "./sections/company/company";
import News from "./sections/news/news";
import Partners from "./sections/partners/partners";

function Home() {
  return (
    <div>
      <Hero/>
      <Products/>
      <Servies/>
      <Company/>
      <News/>
      <Partners/>
    </div>
  )
}

export default Home