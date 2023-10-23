import { Box, Grid } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { CatalogProduct, CatalogProductCart, NavbarComponent, Sidebar } from "../components";
import { Footer } from "../components/footer";
import { Header } from "../layout";

export const ProductsPage = () => {
  const { products } = useSelector((state) => state.storefront);

  const [size, setSize] = useState(null);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleRangeChange = (value) => {
    setPriceRange(value);
  };

  console.log(size);
  console.log(category);
  console.log(color);
  console.log(priceRange);

  console.log(products);

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    const sidebar = sidebarRef.current;
    
    if (sidebar) {
      const topOffset = sidebar.getBoundingClientRect().top;
      const isSticky = topOffset <= 0;
    
      if (isSticky) {
        sidebar.style.position = "sticky";
        sidebar.style.top = "0";
      } else {
        sidebar.style.position = "relative";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filtro de productos
  const filteredProducts = products.filter((product) => {
    const price = product.price;
    const [minPrice, maxPrice] = priceRange;

    if (
      size &&
      category &&
      minPrice <= price &&
      price <= maxPrice
    ) {
      return product.size === size && product.category === category;
    } else if (size && minPrice <= price && price <= maxPrice) {
      return product.size === size;
    } else if (category && minPrice <= price && price <= maxPrice) {
      return product.category === category;
    } else if (minPrice <= price && price <= maxPrice) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <Box>
      <NavbarComponent/>
      <Header title={"Crochet Pinturas y más"} subtitle={"Todo lo que más deseas"} />

      <Grid container  justifyContent={"center"}>
        <Grid item xs={4} md={3}>
          <Sidebar
            onSizeChange={handleSizeChange}
            onCategoryChange={handleCategoryChange}
            onColorChange={handleColorChange}
            onRangeChange={handleRangeChange}
            category={category}
            ref={sidebarRef}
          />
        </Grid>

        <Grid item xs={7} md={8}>
          <Grid container justifyContent={'center'}>
            {filteredProducts.map((product) => (
              <CatalogProduct key={product.id} size={4} {...product} />
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};