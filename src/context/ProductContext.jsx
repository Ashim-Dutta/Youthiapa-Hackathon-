import { createContext, useState } from "react";
import two from '../images/two.jpg'

// Create Context
export const productcontext = createContext(null);

const ProductContext = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dooms Day Tee",
      image: two,
      price: 699,
      category:"T-shirt"
    },
    {
      id: 2,
      name: "The Titu Face Mask 2.0",
      image: "//youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=720 720w, //youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=660 660w, //youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=550 550w, //youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=480 480w, //youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=330 330w, //youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=240 240w, //youthiapa.com/cdn/shop/products/Sameer_2bff5d76-e579-485a-9a87-2037525bb32d.jpg?v=1609735474&width=185 185w",
      price: 300,
      category:"Mask"

    },
    {
      id: 3,
      name: "The BBKV Comic Tee",
      image: "//youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=720 720w, //youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=660 660w, //youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=550 550w, //youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=480 480w, //youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=330 330w, //youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=240 240w, //youthiapa.com/cdn/shop/products/TheComicTeetransbg.png?v=1681817400&width=185 185w",
      price: 599,
      category:"T-shirt"

    },
    {
      id: 4,
      name: "The Hustle Bhasad Tee - Red",
      image: "//youthiapa.com/cdn/shop/products/hustleRed.jpg?v=1609071154&width=2480",
      price: 599,
      category:"T-shirt"

    },
    {
      id: 5,
      name: "The BBteers Edition - Red",
      image: "//youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=720 720w, //youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=660 660w, //youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=550 550w, //youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=480 480w, //youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=330 330w, //youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=240 240w, //youthiapa.com/cdn/shop/products/BBteersred.jpg?v=1609245917&width=185 185w",
      price: 549,
      category:"T-shirt"

    },
    {
      id: 6,
      name: "Oh Yeah Hoodie",
      image: "//youthiapa.com/cdn/shop/files/WhatsAppImage2023-12-29at20.26.55.jpg?v=1733999155&width=768",
      price: 1299,
      category:"Hoodie"

    },
    {
      id: 7,
      name: "Hustle Sweatshirt",
      image: "//youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=720 720w, //youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=660 660w, //youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=550 550w, //youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=480 480w, //youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=330 330w, //youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=240 240w, //youthiapa.com/cdn/shop/products/SweatshirtMock.jpg?v=1609417725&width=185 185w",
      price: 1299,
      category:"Hoodie"

    },
    {
      id: 8,
      name: "Bancho Edition",
      image: "//youthiapa.com/cdn/shop/products/bhai_ki_izzat.jpg?v=1507562973&width=530",
      price: 425,
      category:"Cup"

    },
    {
      id: 9,
      name: "Sameer Fudd*** Edition",
      image: "//youthiapa.com/cdn/shop/products/fuddi.jpg?v=1498636112&width=480 480w, //youthiapa.com/cdn/shop/products/fuddi.jpg?v=1498636112&width=330 330w, //youthiapa.com/cdn/shop/products/fuddi.jpg?v=1498636112&width=240 240w, //youthiapa.com/cdn/shop/products/fuddi.jpg?v=1498636112&width=185 185w",
      price: 425,
      category:"Cup"

    },
    {
      id: 10,
      name: "The Heer-Ranjha Edition",
      image: "//youthiapa.com/cdn/shop/products/MugFront_10.jpg?v=1594729641&width=2193",
      price: 425,
      category:"Cup"

    },
    {
      id: 11,
      name: "BBteers Key Chain(Set of 3)",
      image:"//youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=720 720w, //youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=660 660w, //youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=550 550w, //youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=480 480w, //youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=330 330w, //youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=240 240w, //youthiapa.com/cdn/shop/products/keychain.jpg?v=1556523300&width=185 185w",
      price: 299,
      category:"Keychain"

    },
    {
      id: 12,
      name: "BB Super Hero Kit",
      image: "//youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=720 720w, //youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=660 660w, //youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=550 550w, //youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=480 480w, //youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=330 330w, //youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=240 240w, //youthiapa.com/cdn/shop/products/A.jpg?v=1568977050&width=185 185w",
      price: 499,
      category:"Kit"

    },
    {
      id: 13,
      name: "Super Hero Diary Combo",
      image: "//youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=720 720w, //youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=660 660w, //youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=550 550w, //youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=480 480w, //youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=330 330w, //youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=240 240w, //youthiapa.com/cdn/shop/products/Diary.jpg?v=1568977907&width=185 185w",
      price: 349,
      category:"Diary"
    },
    {
      id: 14,
      name: "BB Super Hero Canvas Bag",
      image: "//youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=720 720w, //youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=660 660w, //youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=550 550w, //youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=480 480w, //youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=330 330w, //youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=240 240w, //youthiapa.com/cdn/shop/products/C_b9d0f67d-de27-452d-8a58-bd9aa60b8af6.jpg?v=1600515395&width=185 185w",
      price: 249,
      category:"Bag"
    },
    {
      id: 15,
      name: "BB Badge - Pack of 6",
      image: "//youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=720 720w, //youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=660 660w, //youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=550 550w, //youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=480 480w, //youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=330 330w, //youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=240 240w, //youthiapa.com/cdn/shop/products/pack_of_6.jpg?v=1552319546&width=185 185w",
      price: 299,
      category:"Badge"

    },
    {
      id: 16,
      name: "OK Edition Mask 2.0",
      image: "//youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=720 720w, //youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=660 660w, //youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=550 550w, //youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=480 480w, //youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=330 330w, //youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=240 240w, //youthiapa.com/cdn/shop/products/OK_cc5d883f-647a-47b8-98f2-68026036cf41.jpg?v=1609735491&width=185 185w",
      price: 280,
      category:"Mask"

    },
    {
      id: 17,
      name: "Saste Avenger Mask 2.0",
      image: "//youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=720 720w, //youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=660 660w, //youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=550 550w, //youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=480 480w, //youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=330 330w, //youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=240 240w, //youthiapa.com/cdn/shop/products/SasteAvengers.jpg?v=1609740554&width=185 185w",
      price: 280,
      category:"Mask"

    },
    {
      id: 18,
      name: "The Father Edition - Olive",
      image: "//youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=720 720w, //youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=660 660w, //youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=550 550w, //youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=480 480w, //youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=330 330w, //youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=240 240w, //youthiapa.com/cdn/shop/products/BaapBaapHotahaiOlive.jpg?v=1609848390&width=185 185w",
      price: 549,
      category:"T-shirt"

    },
    {
      id: 19,
      name: "The Heer-Ranjha Edition",
      image: "//youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=720 720w, //youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=660 660w, //youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=550 550w, //youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=480 480w, //youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=330 330w, //youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=240 240w, //youthiapa.com/cdn/shop/products/HR7B.jpg?v=1609070935&width=185 185w",
      price: 549,
      category:"T-shirt"

    },
    {
      id: 20,
      name: "Dhindora Official Hoodie",
      image: "//youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=720 720w, //youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=660 660w, //youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=550 550w, //youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=480 480w, //youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=330 330w, //youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=240 240w, //youthiapa.com/cdn/shop/products/dhindorahoodie-1.jpg?v=1635767530&width=185 185w",
      price: 1299,
      category:"Hoodie"

    },

    {
      id: 21,
      name: "Dooms Day Tee",
      image: "//youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=720 720w, //youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=660 660w, //youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=550 550w, //youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=480 480w, //youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=330 330w, //youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=240 240w, //youthiapa.com/cdn/shop/files/10_fa91bb15-3fd1-47b6-be6f-5225e33d30f6.jpg?v=1749379522&width=185 185w",
      price: 1999,
      category: "Oversized T-Shirt",
      size:"Oversize "
      
    },

    {
      id:22,
      name: "Orange Truth",
      image: "//youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=720 720w, //youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=660 660w, //youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=550 550w, //youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=480 480w, //youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=330 330w, //youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=240 240w, //youthiapa.com/cdn/shop/files/5_22b4c66e-3549-42f5-9e53-1ef0eb7080d6.jpg?v=1749371746&width=185 185w",
      price: 1999,
      category: "Oversized T-Shirt",
      size:"Oversize"
      
    },

     {
      id:23,
      name: "Twin Koi Tee",
      image: "//youthiapa.com/cdn/shop/files/4_4.jpg?v=1749384189&width=4000",
      price: 1999,
      category:"Oversized T-Shirt",
      size:"Oversize "
      
    },
     
      {
      id:24,
      name: "Butterfly tee",
      image: "//youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=720 720w, //youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=660 660w, //youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=550 550w, //youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=480 480w, //youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=330 330w, //youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=240 240w, //youthiapa.com/cdn/shop/files/C5CF2A3E-A399-425A-B0CB-59A33ACED6B3.png?v=1751310591&width=185 185w",
      price: 1999,
      category:"Oversized T-Shirt",
      size:"Oversize"
      
    },
        {
      id:25,
      name: "Garden By Eden",
      image: "//youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=720 720w, //youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=660 660w, //youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=550 550w, //youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=480 480w, //youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=330 330w, //youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=240 240w, //youthiapa.com/cdn/shop/files/wb_75c6b64d-79bc-45e0-8b22-aefe367eb72f.jpg?v=1749388508&width=185 185w",
      price: 1999,
      category:"Oversized T-Shirt",
      size:"Oversize"
      
    },
          {
      id:26,
      name: "Summer time-happiness",
      image: "//youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=720 720w, //youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=660 660w, //youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=550 550w, //youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=480 480w, //youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=330 330w, //youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=240 240w, //youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=185 185w",
      price: 1999,
      category:"Oversized T-Shirt",
      size:"Oversize "
    },
          
                    {
      id:27,
      name: "Rugged Denim Cargo",
      image: "//youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=720 720w, //youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=660 660w, //youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=550 550w, //youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=480 480w, //youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=330 330w, //youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=240 240w, //youthiapa.com/cdn/shop/files/6_2.jpg?v=1749399875&width=185 185w",
      price: 2999,
      category:"Cargos",
      size:"Oversize "
    },
         {         
      id:28,
      name: "Geared Cargo",
      image: "//youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=720 720w, //youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=660 660w, //youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=550 550w, //youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=480 480w, //youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=330 330w, //youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=240 240w, //youthiapa.com/cdn/shop/files/12_1.jpg?v=1749902358&width=185 185w",
      price: 2499,
      category:"Cargos",
      size:"Oversize"
    },
    {
          id:29,
      name: "Sand Cargo",
      image: "//youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=720 720w, //youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=660 660w, //youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=550 550w, //youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=480 480w, //youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=330 330w, //youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=240 240w, //youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=185 185w",
      price: 2499,
       category:"Cargos",
      size:"Oversize "
    },
{
          id:30,
      name: "VTG Cargo",
      image: "//youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=720 720w, //youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=660 660w, //youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=550 550w, //youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=480 480w, //youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=330 330w, //youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=240 240w, //youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=185 185w",
      price: 2499,
       category:"Cargos",
      size:"Oversize "
    },
{
          id:31,
      name: "Transit Cargo",
      image: "//youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=720 720w, //youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=660 660w, //youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=550 550w, //youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=480 480w, //youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=330 330w, //youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=240 240w, //youthiapa.com/cdn/shop/files/5_6.jpg?v=1749405679&width=185 185w",
      price: 1999,
      category:"Cargos",
      size:"Oversize "
    },
{
       id:32,
      name: "Saga Set",
      image: "//youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=720 720w, //youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=660 660w, //youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=550 550w, //youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=480 480w, //youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=330 330w, //youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=240 240w, //youthiapa.com/cdn/shop/files/5_9.jpg?v=1749563618&width=185 185w",
      price: 3000,
      category:"coords fit",
      size:"Oversize "
    },

    {
       id:33,
      name: "Dune Set",
      image: "//youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=720 720w, //youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=660 660w, //youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=550 550w, //youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=480 480w, //youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=330 330w, //youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=240 240w, //youthiapa.com/cdn/shop/files/4_12.jpg?v=1749408956&width=185 185w",
      price: 3000,
      category:"coords fit",
      size:"Oversize "
    },

  ]);

  return (
    <productcontext.Provider value={{ products, setProducts }}>
      {props.children}
    </productcontext.Provider>
  );
};

export default ProductContext;
