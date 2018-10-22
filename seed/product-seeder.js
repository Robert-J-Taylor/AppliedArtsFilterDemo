var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/appliedartdemo');

var products = [
    new Product({
        imagePath: './assets/img/ecommerce/blue_painting.jpg',
        imagePath2: './assets/img/ecommerce/blue_painting2.jpg',
        imagePath3:'./assets/img/ecommerce/blue_painting3.jpg',
        imagePath4:'./assets/img/ecommerce/blue_painting4.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        type:'painting',
        title: 'Beach Wave Swirl',
        description: 'Beach Wave Swirl Boxed Frame Ready to Hang Acrylic Pour',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. Beach vibes and vibrant blues/greens. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/grey_painting.jpg',
        imagePath2: './assets/img/ecommerce/grey_painting2.jpg',
        imagePath3:'./assets/img/ecommerce/grey_painting3.jpg',
        imagePath4:'./assets/img/ecommerce/grey_painting4.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        type:'painting',
        title: 'Abstract Radial Swirl',
        description: 'Abstract Radial Swirl Boxed Frame Ready to Hang Acrylic Pour',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. This piece was so much fun! It was created with a paint pendulum that I made and hung from the ceiling. I absolutely love how the colors mix. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek Floating Frames  for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/earth_painting.jpg',
        imagePath2: './assets/img/ecommerce/earth_painting2.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        title: 'Mother Earth',
        type:'painting',
        description: 'Mother Earth Frame Ready to Hang Acrylic Pour Painting',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. I am a space enthusiast and creating planets is possibly one of my favorite subjects. This piece makes up in its simplicity in its vibrate colors and unity of motion. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/purple_painting.jpg',
        imagePath2: './assets/img/ecommerce/purple_painting2.jpg',
        imagePath3:'./assets/img/ecommerce/purple_painting3.jpg',
        imagePath4:'./assets/img/ecommerce/purple_painting4.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        type:'painting',
        title: 'Tiny Man in a Giant Galaxy',
        description: 'Just a Tiny Man in a Giant Galaxy Boxed Frame Ready to Hang Acrylic Pour',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. This piece is particularly one of my most favorites. If you look really close, and you cant see with a glancing eye, theres a small figure standing on a bridge like structure peering into the galaxy.. Can you relate? It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/green_painting.jpg',
        imagePath2: './assets/img/ecommerce/green_painting2.jpg',
        imagePath3:'./assets/img/ecommerce/green_painting3.jpg',
        imagePath4:'./assets/img/ecommerce/green_painting4.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        type:'painting',
        title: 'Green Earth',
        description: 'Abstract Motion Art Earth Green Boxed Frame Ready to HAng Acrylic Pour',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. This piece was so much fun! It was created with a paint pendulum that I made and hung from the ceiling. I absolutely love how the colors mix. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/white_painting.jpg',
        imagePath2: './assets/img/ecommerce/white_painting2.jpg',
        imagePath3:'./assets/img/ecommerce/white_painting3.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        type:'painting',
        title: 'Test Painting Title',
        description: 'Test description',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. This piece was created with the acrylic pour and swipe technique. It would go wonderfully in a room with soft brown and pink colors. I adore this piece and had a blast making it. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/purple_green_painting.jpg',
        imagePath2: './assets/img/ecommerce/purple_green_painting2.jpg',
        imagePath3:'./assets/img/ecommerce/purple_green_painting3.jpg',
        height: '16 inches',
        width: '20 inches',
        type:'painting',
        material:'acrylic',
        title: 'Our Galaxy',
        description: 'Galaxy Boxed Frame Ready to Hange Acrylic Pour',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. I am a space enthusiast and creating planets and space is possibly one of my favorite subjects. This piece was created to display all the beautiful space gases. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/white_black_painting.jpg',
        imagePath2: './assets/img/ecommerce/white_black_painting.jpg',
        height: '16 inches',
        width: '20 inches',
        material:'acrylic',
        type:'painting',
        title: 'Shades of Black & White',
        description: 'Shades of Black White and Blue Boxed Frame Ready to Hang Acrylic Pour',
        description2:'This painting is a 16"x20" acrylic pour painting made by me, Kelsi Martin owner of ModernWolfDesigns, in my humble art studio. It was created on a box frame which is designed to be hung with or without a frame. Black frame is not included but I do advice buyers to seek " Floating Frames " for boxed canvases because they turn out gorgeous!',
        price: 40
    }),
    new Product({
        imagePath: './assets/img/ecommerce/green_yellow_pendant.jpg',
        imagePath2: './assets/img/ecommerce/green_yellow_pendant2.jpg',
        height: '1.5 inches',
        width: '1.5 inches',
        type:'pendant',
        material:'Glass, Stainless steel',
        title: 'Green and Yellow Acrylic Pour Glass Dome Pendant',
        description: 'One of a Kind Green and Yellow Acrylic Pour Paint Handmade Glass Dome Pendant',
        description2:'One of a kind pendant that was hand made by me in my humble studio. Vibrate, durable, and made with love. I believe you dont pick your jewelry, your jewelry picks you. It captivates you and you get lost in the piece. I find myself staring into them and getting lost in the designs. Whatever speaks to you, tells its own story to you and you only.Find your journey in my pendants that are all NICKLE AND LEAD free. Im hyper sensitive to many types of materials and most products are listed as surgical steel, lead free, and nickel free but usually thats not the case. All my pendants are hypoallergenic safe. 24" Chain and crystal clear glass dome',
        price: 20
    }),
    new Product({
        imagePath: './assets/img/ecommerce/green_pendant.jpg',
        imagePath2: './assets/img/ecommerce/green_pendant.jpg',
        height: '1.5 inches',
        width: '1.5 inches',
        type:'pendant',
        material:'Glass, Stainless steel',
        title: 'Green and Yellow Acrylic Pour Glass Dome Pendant',
        description: 'One of a Kind Green and Yellow Acrylic Pour Paint Handmade Glass Dome Pendant',
        description2:'One of a kind pendant that was hand made by me in my humble studio. Vibrate, durable, and made with love. I believe you dont pick your jewelry, your jewelry picks you. It captivates you and you get lost in the piece. I find myself staring into them and getting lost in the designs. Whatever speaks to you, tells its own story to you and you only. Find your journey in my pendants that are all NICKLE AND LEAD free. Im hyper sensitive to many types of materials and most products are listed as surgical steel, lead free, and nickel free but usually thats not the case. All my pendants are hypoallergenic safe. ',
        price: 20
    }),
    
    new Product({
        imagePath: './assets/img/ecommerce/mini_magnets.jpg',
        imagePath2: './assets/img/ecommerce/mini_magnets2.jpg',
        imagePath2: './assets/img/ecommerce/mini_magnets3.jpg',
        imagePath2: './assets/img/ecommerce/mini_magnets4.jpg',
        height: '2 inches',
        width: '2 inches',
        material:'acrylics',
        type:'magnet',
        title: 'Mini Acrylic Pour Magnets',
        description: 'Mini Acrylic Pour Picked at Random Unique Fridge Canvas Magnets',
        description2:'Miniature acrylic pour painting magnets that are handcrafted by me on 2"x2" Canvas. All paintings are reinforced with a sturdy bonding agent on a strong magnet. Each magnet is unique and can NOT be recreated. Each hold their own personality and charm. These are great pieces for art collectors or people who are attracted to vivid colors and abstract designs. EACH MAGNET SOLD WILL BE PICKED AT RANDOM BECAUSE THE FUN IS IN THE SURPRISE!',
        price: 5
    }),
    new Product({
        imagePath: './assets/img/ecommerce/teardrop.jpg',
        imagePath2: './assets/img/ecommerce/teardrop2.jpg',
        height: '1.5 inches',
        width: '1.5 inches',
        type:'pendant',
        material:'Glass, Stainless steel',
        title: 'Black and Red TearDrop Acrylic Pendant',
        description: 'Black and Red TearDrop Acrylic Pour One of a Kind Glass Dome Pendant',
        description2:'One of a kind pendant that was hand made by me in my humble studio. Vibrate, durable, and made with love. I believe you dont pick your jewelry, your jewelry picks you. It captivates you and you get lost in the piece. I find myself staring into them and getting lost in the designs. Whatever speaks to you, tells its own story to you and you only. Find your journey in my pendants that are all NICKLE AND LEAD free. Im hyper sensitive to many types of materials and most products are listed as surgical steel, lead free, and nickel free but usually thats not the case. All my pendants are hypoallergenic safe. ',
        price: 20
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    console.log("mongo disconnecting");
    mongoose.disconnect();
}