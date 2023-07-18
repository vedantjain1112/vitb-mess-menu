import React, { useState } from "react";

import "./Menu.css";

function Menu() {
  const menuData = {
    monday: {
      breakfast: [
        "Dosa",
        "Sambhar,Chutney",
        "Fruits",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
      ],
      lunch: [
        "Salad",
        "Roti",
        "Jeera Rice",
        "Veg 65",
        "Rajma",
        "Sambhar",
        "Butter Milk",
        "Rasam",
        "Fresh Juice",
      ],
      snacks: ["Dabeli", "Biscuits", "Milk/Tea/Coffee"],
      dinner: [
        "Jeera Rice",
        "Roti",
        "Rajasthani Bhindi",
        "Plain Dal",
        "Rasam",
        "Egg Bhurji",
      ],
    },

    tuesday: {
      breakfast: [
        "Puri Sabji",
        "Fruits - Watermelon",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
        "Pongal",
      ],
      lunch: [
        "Salad",
        "Roti",
        "Curd Rice",
        "Chhole",
        "Dal Fry",
        "Sambhar",
        "Rasam",
        "Curd",
        "Plain Rice",
      ],
      snacks: ["Pani Puri", "Sauce", "Milk/Tea/Coffee"],
      dinner: [
        "Roti",
        "Kuska",
        "Chana Masala",
        "Masala Dal",
        "Rasam",
        "Pickle (Aachar)",
        "Fruit Custard",
        "Kheer",
      ],
    },

    wednesday: {
      breakfast: [
        "Pav Bhaji",
        "Fruits",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
      ],
      lunch: [
        "Salad",
        "Roti",
        "Jeera Rice",
        "Aloo Cabbage Peas",
        "Dal Tadka",
        "Sambhar",
        "Rasam",
        "Butter Milk",
      ],
      snacks: ["Samosa/Kachori", "Milk/Tea/Coffee"],
      dinner: [
        "Rice",
        "Roti",
        "Dal Tadka",
        "Pepper Chicken Dry",
        "Rasam",
        "Mughlai Paneer",
      ],
    },

    thursday: {
      breakfast: [
        "Idli/Vada",
        "Sambhar,Chutney",
        "Fruits",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
      ],
      lunch: [
        "Salad",
        "Roti",
        "Plain Rice",
        "Masoor Dal",
        "Aloo Gobi Day",
        "Sambhar/Rasam",
        "Raw Banana Vegetable",
        "Plain Rice",
        "Curd",
      ],
      snacks: ["Chow mein", "Onion Pakoda", "Milk/Tea/Coffee"],
      dinner: [
        "Rice",
        "Roti",
        "Peas Masala",
        "Egg Curry",
        "Plain Dal",
        "Rasam",
      ],
    },

    friday: {
      breakfast: [
        "Poha",
        "Jalebi",
        "Fruits",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
      ],
      lunch: [
        "Salad",
        "Roti",
        "Potato Fry/Aloo Palak",
        "Kaju Rice",
        "Dal Tadka",
        "Plain Rice",
        "Rasam",
        "Curd",
        "Fresh Juice",
      ],
      snacks: ["Dahi Papdi Chaat", "Milk/Tea/Coffee"],
      dinner: [
        "Roti",
        "Rice",
        "Chettinad Chicken",
        "Paneer Tikka Masala",
        "Plain Dal",
        "Rasam",
      ],
    },

    saturday: {
      breakfast: [
        "Uttapam",
        "Sambhar,Chutney",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
      ],
      lunch: [
        "Salad",
        "Kashmiri Pulao",
        "Gobi Corn Masala",
        "Roti",
        "Bengali Dal",
        "Beetroot Dry",
        "Plain Rice",
        "Rasam",
      ],
      snacks: ["Dhokla/Chana", "Milk/Tea/Coffee"],
      dinner: [
        "Jeera Rice",
        "Dal Makhani",
        "Roti",
        "Achari Aloo",
        "Rasam",
        "Soup",
        "Halwa",
        "Rice",
      ],
    },

    sunday: {
      breakfast: [
        "Aloo Gobi Paratha",
        "Pickle (Aachar)",
        "Bread",
        "Butter/Jam",
        "Milk/Tea/Coffee",
      ],
      lunch: [
        "Salad",
        "Chicken Biryani",
        "Raita",
        "Veg Biryani",
        "Dal Maharani",
        "Paneer",
        "Boondi Raita",
      ],
      snacks: ["Peanut Pakoda", "Spring Roll", "Milk/Tea/Coffee"],
      dinner: ["Ghee Rice", "Roti", "Baingan Bharta", "Rasam", "Gulab Jamun"],
    },
  };

  const imageUrls = {
    Idli: "https://tse1.mm.bing.net/th?id=OIP.5LLCEcWF40CIZkI5z0CQLQHaHz&pid=Api&P=0&h=180",
    "Medu Vada":
      "https://tse2.mm.bing.net/th?id=OIP.o9BkLH4f-ys3G_KkX53_ZQHaEx&pid=Api&P=0&h=180",
    "Chutney,Sambhar":
      "https://www.bharatmasala.in/wp-content/uploads/2021/06/2710181540666677.png",
    "Banana/Fruit Salad":
      "https://tse1.mm.bing.net/th?id=OIP.Qr_cYZdn0QBIE5egqL4BuwHaDt&pid=Api&P=0&h=180",
    Bread:
      "https://tse4.mm.bing.net/th?id=OIP.b19TMs1UukGQIqSIKTXb1QHaFQ&pid=Api&P=0&h=180",
    "Butter/Jam":
      "https://tse4.mm.bing.net/th?id=OIP.QaV9gjnuTW5biK9tf2m46wHaEK&pid=Api&P=0&h=180",
    "Milk/Tea/Coffee":
      "https://tse2.mm.bing.net/th?id=OIP.cPbYWOlyjr4RK__yM-qRjQHaHa&pid=Api&P=0&h=180",
    Salad:
      "https://tse4.mm.bing.net/th?id=OIP.2LT7l2oEDjsqW_SCNg4UEQHaFE&pid=Api&P=0&h=180",
    Roti: "https://tse1.mm.bing.net/th?id=OIP.jTmn5nAoQkrGUoVvLnMudQHaE8&pid=Api&P=0&h=180",
    "Rajma Gharwala":
      "https://tse3.mm.bing.net/th?id=OIP.8rpYttVfEbqmuMgNY_xFqwHaFj&pid=Api&P=0&h=180",
    "Jeera Rice":
      "https://tse4.mm.bing.net/th?id=OIP.wK096Ib7jgp7Xv2h2DTLZgHaFP&pid=Api&P=0&h=180",
    "Aloo Pepper Fry":
      "https://i1.wp.com/www.antoskitchen.com/wp-content/uploads/2017/02/DSC2354.jpg?resize=1024%2C902&ssl=1",
    Rice: "https://tse4.mm.bing.net/th?id=OIP.K3WACs1HrLRKWSWziX02vQHaHa&pid=Api&P=0&h=180",
    "Lemon Juice":
      "https://tse3.mm.bing.net/th?id=OIP.jLG_XAWGNNS3Iy0U7oJDjwHaIK&pid=Api&P=0&h=180",
    Koottu:
      "https://tse2.mm.bing.net/th?id=OIP.rl26iHDA7y-Lb7B9kC6IkQHaEK&pid=Api&P=0&h=180",
    Rasam:
      "https://tse4.mm.bing.net/th?id=OIP.XoHZdmy3dzALYV_GYEo8HgHaE7&pid=Api&P=0&h=180",
    Juice:
      "https://tse2.mm.bing.net/th?id=OIP.lUh6isnpTiqIR5OF0qBLSAHaHa&pid=Api&P=0&h=180",
    "Vada Pav":
      "https://tse3.mm.bing.net/th?id=OIP.Vr2CMTtozG-XwdK-WMrAqAHaE7&pid=Api&P=0&h=180",
    "Milk/Tea/Coffee":
      "https://tse2.mm.bing.net/th?id=OIP.cPbYWOlyjr4RK__yM-qRjQHaHa&pid=Api&P=0&h=180",
    Roti: "https://tse1.mm.bing.net/th?id=OIP.jTmn5nAoQkrGUoVvLnMudQHaE8&pid=Api&P=0&h=180",
    "Kashmiri Pulao":
      "https://tse4.mm.bing.net/th?id=OIP.R_S-y60LzyvsqUyKb3aknAHaE7&pid=Api&P=0&h=180",
    "Egg Bhurji Masala":
      "https://tse2.mm.bing.net/th?id=OIP.moy31HQ9hd7rm4_nNFi1LwHaE6&pid=Api&P=0&h=180",
    "Plain Dal":
      "https://tse1.mm.bing.net/th?id=OIP.Jj3iRcALz32dDXashVHD-QHaFj&pid=Api&P=0&h=180",
    Rasam:
      "https://tse4.mm.bing.net/th?id=OIP.XoHZdmy3dzALYV_GYEo8HgHaE7&pid=Api&P=0&h=180",
    "Pickle (Aachar)":
      "https://tse3.mm.bing.net/th?id=OIP.y_Efw-v56J8MSvBwDjrRqAHaE9&pid=Api&P=0&h=180",
    "Veg Paratha/Poori":
      "https://tse2.mm.bing.net/th?id=OIP.ZKJXbstUrgtKSQxV8DTnpAHaEK&pid=Api&P=0&h=180",
    "Veg Sabji":
      "https://tse1.mm.bing.net/th?id=OIP.o5lVF500U0sAjCoPXFRBtQHaEK&pid=Api&P=0&h=180",
    Bread:
      "https://tse4.mm.bing.net/th?id=OIP.b19TMs1UukGQIqSIKTXb1QHaFQ&pid=Api&P=0&h=180",
    "Butter/Jam":
      "https://tse4.mm.bing.net/th?id=OIP.QaV9gjnuTW5biK9tf2m46wHaEK&pid=Api&P=0&h=180",
    "Milk/Tea/Coffee":
      "https://tse2.mm.bing.net/th?id=OIP.cPbYWOlyjr4RK__yM-qRjQHaHa&pid=Api&P=0&h=180",
    Salad:
      "https://tse4.mm.bing.net/th?id=OIP.2LT7l2oEDjsqW_SCNg4UEQHaFE&pid=Api&P=0&h=180",
    Poori:
      "https://tse4.mm.bing.net/th?id=OIP.FTP3DL5CvdZkQE_hjH5BDQHaIP&pid=Api&P=0&h=180",
    "Chana Masala":
      "https://tse4.mm.bing.net/th?id=OIP.pZv3OYwM8djB6pfApcoOZQHaE7&pid=Api&P=0&h=180",
    "Plain Rice":
      "https://tse4.mm.bing.net/th?id=OIP.K3WACs1HrLRKWSWziX02vQHaHa&pid=Api&P=0&h=180",
    "Dal Tadka":
      "https://tse3.mm.bing.net/th?id=OIP.ArMeZRFWelPozqpW8s9FBwHaF8&pid=Api&P=0&h=180",
    Sambhar:
      "https://www.bharatmasala.in/wp-content/uploads/2021/06/2710181540666677.png",
    "Carrot Beans Poriyal":
      "https://asmallbite.com/wp-content/uploads/2016/03/Carrot-Beans-Poriyal-3-768x637.jpg",
    Curd: "https://tse4.mm.bing.net/th?id=OIP.FwD5Z44SmxCYfY7cVg52xQHaGc&pid=Api&P=0&h=180",
    "Bhel/Chana Sundal":
      "https://tse2.mm.bing.net/th?id=OIP.PHWNww1mZWE7ErxtkJUt2gHaD4&pid=Api&P=0&h=180",
    Sauce:
      "https://i2.wp.com/dishesanddustbunnies.com/wp-content/uploads/2017/06/Sweet-Sour-Sauce-1.jpg?resize=2500%2C1667&ssl=1",
    "Milk/Tea/Coffee":
      "https://tse2.mm.bing.net/th?id=OIP.cPbYWOlyjr4RK__yM-qRjQHaHa&pid=Api&P=0&h=180",
    Roti: "https://tse1.mm.bing.net/th?id=OIP.jTmn5nAoQkrGUoVvLnMudQHaE8&pid=Api&P=0&h=180",
    Kuska:
      "https://tse4.mm.bing.net/th?id=OIP.amlUt37OILTiqTIAe73zFQHaEL&pid=Api&P=0&h=180",
    "Aloo Meal Maker Sabji":
      "https://tse1.mm.bing.net/th?id=OIP.HiS-pEphQzaAOPqnWSEkxwHaE4&pid=Api&P=0&h=180",
    Rasam:
      "https://tse4.mm.bing.net/th?id=OIP.XoHZdmy3dzALYV_GYEo8HgHaE7&pid=Api&P=0&h=180",
    "Pickle (Aachar)":
      "https://tse3.mm.bing.net/th?id=OIP.y_Efw-v56J8MSvBwDjrRqAHaE9&pid=Api&P=0&h=180",
    Halwa: "https://i.ytimg.com/vi/Zx-9YQRxVIw/maxresdefault.jpg",
    "Fruit Custard":
      "https://tse2.mm.bing.net/th?id=OIP.EdczvuG9pFZH866nh4OhlwHaGN&pid=Api&P=0&h=180",
    "Pani Puri":
      "https://tse1.mm.bing.net/th?id=OIP.TxJY2wfY44_t9IMqSjCCOwHaE9&pid=Api&P=0&h=180",
    "Capsicum Onion Chicken":
      "https://www.masala.tv/wp-content/uploads/2015/07/Capsicum-Chicken-Recipe.jpg",
    "Butter Paneer":
      "https://tse3.mm.bing.net/th?id=OIP.SB1Qyotq9llFTQ59twHtjQHaHa&pid=Api&P=0&h=180",
    "Aloo Corn":
      "https://i.pinimg.com/originals/5f/29/d0/5f29d0164a4a33dc6074ceed3a15802f.jpg",
    "Mix Dal":
      "https://tse4.mm.bing.net/th?id=OIP.MXNORv2ZolYRi7Loui9akwHaHa&pid=Api&P=0&h=180",
    "Palak Kootu Sabji":
      "https://i.pinimg.com/originals/e0/85/ae/e085ae84492e3e662b554f4d34e78058.jpg",
    "Curd Rice": "https://recipes.timesofindia.com/photo/61739922.cms",
    Payasam:
      "https://media.cntraveller.in/wp-content/uploads/2020/08/payasam-1366x768.jpg",
    Uttapam:
      "https://tse3.mm.bing.net/th?id=OIP.Rgu5ayXBzVvhYOVjh9NRmAHaFK&pid=Api&P=0&h=180",
    "Kara Chutney":
      "https://tse2.mm.bing.net/th?id=OIP.lHFt2EIc68mY9_E-xuckvAHaHa&pid=Api&P=0&h=180",
    "Pongal/Poha":
      "https://tse1.mm.bing.net/th?id=OIP.2eCPGwUMweftS4SGFJOFdAHaEK&pid=Api&P=0&h=180",
    Jalebi:
      "https://tse3.mm.bing.net/th?id=OIP.6_AMDfjQM-tFWcY-qe-egQHaHa&pid=Api&P=0&h=180",
    Chutney:
      "https://4.bp.blogspot.com/-0gWQfANIgcs/WHGIM5z9e9I/AAAAAAAASNk/aYORnTyvFlgHvyGB_vjjdJ_uSHPbaiAugCLcB/w1200-h630-p-k-no-nu/Locquat%2BChutney%2B-%2B3.jpg",
    "Navratan Korma":
      "https://tse4.mm.bing.net/th?id=OIP.CBPxcNkBw_I389Gyjn5sJAHaFg&pid=Api&P=0&h=180",
    "Tomato Dal (Andhra Style)":
      "https://i2.wp.com/www.cookingfromheart.com/wp-content/uploads/2015/09/ch_dsc_0256_9.jpg?resize=1470%2C680",
    "Veg Pulao":
      "https://tse2.mm.bing.net/th?id=OIP.9HPyWxkrVTyFiESuJpfh8AHaEK&pid=Api&P=0&h=180",
    "Drumstick,Brinjal,Poriyal":
      "https://3.bp.blogspot.com/-UV_WGCyVZfE/U-1OxkuT1gI/AAAAAAAAEs0/FEFxaNyiJ7M/s1600/Drumstick%2BPoriyal%2BJPEG.jpg",
    "Butter Milk":
      "https://tse2.mm.bing.net/th?id=OIP.pE8fuIBBejMwyGonGvAU6wHaE8&pid=Api&P=0&h=180",
    "Sweet Corn":
      "https://tse2.mm.bing.net/th?id=OIP.c6PuffBxj3hLCTyfCDaDrQHaFj&pid=Api&P=0&h=180",
    "Salad/Dahi Vada":
      "https://tse3.mm.bing.net/th?id=OIP.PO3AFS0-1-zPuhgin07mdAHaE7&pid=Api&P=0&h=180",
    "Green Peas Masala":
      "https://tse1.mm.bing.net/th?id=OIP.eiPuOWa5Cbi6KvNocNvMfgHaGV&pid=Api&P=0&h=180",
    "Egg Masala":
      "https://tse1.mm.bing.net/th?id=OIP.Dx7XyY1fNoNoPGN3ZQhpBAAAAA&pid=Api&P=0&h=180",
    "Dal Fry":
      "https://tse2.mm.bing.net/th?id=OIP.DKc5vy3TU-p0GQXEUIQEFQHaGJ&pid=Api&P=0&h=180",
    Dosa: "https://tse2.mm.bing.net/th?id=OIP.opVQtIwX4LFVUs2ELeKpPQHaEo&pid=Api&P=0&h=180",
    "Green Chutney":
      "https://tse2.mm.bing.net/th?id=OIP.rDPUZHQ4L5h2WET8kLa6tQHaKY&pid=Api&P=0&h=180",
    Raita:
      "https://tse3.mm.bing.net/th?id=OIP.jl2OiT5jaDaKCaUF9KfhIQHaEK&pid=Api&P=0&h=180",
    "Veg Biryani":
      "https://tse3.mm.bing.net/th?id=OIP.rUprSy-Tu_ru7GftGXSI-wHaE8&pid=Api&P=0&h=180",
    Dalcha:
      "https://tse2.mm.bing.net/th?id=OIP.XFSyxrDRCWGD01JHkioTKgHaE4&pid=Api&P=0&h=180",
    "Tomato Thokku":
      "https://tse1.mm.bing.net/th?id=OIP.Sfe6Tq9jDXQFauiiIw5yFgHaHa&pid=Api&P=0&h=180",
    Fryums:
      "https://tse1.mm.bing.net/th?id=OIP.TMlzX0MXRM9axYuFiBD8SwHaEL&pid=Api&P=0&h=180",
    "Cake/Pastries":
      "https://tse4.mm.bing.net/th?id=OIP.XZmgDPJC-SlK8FOXnQyZEQHaFc&pid=Api&P=0&h=180",
    "Butter Chicken":
      "https://tse1.mm.bing.net/th?id=OIP.-yXMEFxS3mn_3hU1QHfdlAHaE-&pid=Api&P=0&h=180",
    "Kadhai Paneer":
      "https://tse4.mm.bing.net/th?id=OIP.FXqSV1UDRXud3U1fMBPmLAHaHa&pid=Api&P=0&h=180",
    Bhatura:
      "https://tse3.mm.bing.net/th?id=OIP.m2TsGNbgzWBNQ7O4kuigHAHaEq&pid=Api&P=0&h=180",
    "Chole Masala":
      "https://tse2.mm.bing.net/th?id=OIP.Ksfgy_n4uOfagVQd5MB9bQHaGQ&pid=Api&P=0&h=180",
    "Chana Dal":
      "https://tse4.mm.bing.net/th?id=OIP.bcoXT4uABsf2TuGvxlG0rAHaHa&pid=Api&P=0&h=180",
    "Khichdi/Tarmarind Rice":
      "https://tse2.mm.bing.net/th?id=OIP.VFp_TkpZTefSejYXw7d0eAHaFj&pid=Api&P=0&h=180",
    "Aloo Chokha":
      "https://tse2.mm.bing.net/th?id=OIP.N1y4HTlVzlih28p5vLiuSgHaD4&pid=Api&P=0&h=180",
    "Vegetable Sambhar":
      "https://tse3.mm.bing.net/th?id=OIP.xfCjZlNMptCC9gUs-b3p-gHaJ3&pid=Api&P=0&h=180",
    "Raw Banana Poriyal":
      "https://tse1.mm.bing.net/th?id=OIP.CBW_jxF5ZBU-zrTGn3WPzgHaLQ&pid=Api&P=0&h=180",
    Samosa:
      "https://tse1.mm.bing.net/th?id=OIP.jBHGNTQ8TlYMYwB8vqSUzgHaFS&pid=Api&P=0&h=180",
    Chapati:
      "https://tse1.mm.bing.net/th?id=OIP.jTmn5nAoQkrGUoVvLnMudQHaE8&pid=Api&P=0&h=180",
    "Fried Rice":
      "https://tse4.mm.bing.net/th?id=OIP.mhTdVEySqcJ7rHyuN6_cywHaFi&pid=Api&P=0&h=180",
    "Gobi Manchurian":
      "https://tse2.mm.bing.net/th?id=OIP.lIciuVfQn_EIYzoR2elb9gHaE8&pid=Api&P=0&h=180",
    "Tinda Aloo Sabji/Aloo Patta Gobi":
      "https://tse3.mm.bing.net/th?id=OIP.Sg27l2lprj5k4eENwOeEWwHaEK&pid=Api&P=0&h=180",
    "Dal Makhani":
      "https://tse2.mm.bing.net/th?id=OIP.c8A2uxH0NkK2xClWkcwcDwHaLH&pid=Api&P=0&h=180",
    "Gulab Jamun":
      "https://tse1.mm.bing.net/th?id=OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk&pid=Api&P=0&h=180",
    Dhokla:
      "https://tse3.mm.bing.net/th?id=OIP.dl-St6AkfrjkP9ggo5wDCwHaEo&pid=Api&P=0&h=180",
    Pasta:
      "https://tse3.mm.bing.net/th?id=OIP.Y_xZivLPBYwF8ndg6vGMvQHaFp&pid=Api&P=0&h=180",
    "Onion Cucumber Raita":
      "https://tse2.mm.bing.net/th?id=OIP.xPGW_s5KmpDPckKqQOugtgHaJR&pid=Api&P=0&h=180",
    "Paneer Biryani":
      "https://tse3.mm.bing.net/th?id=OIP.W_jE-_0a1btwW_hI9YF7iwHaHa&pid=Api&P=0&h=180",
    "Masala Dal":
      "https://tse1.mm.bing.net/th?id=OIP.VhdYsb0ID__hmhY8Hd3DmwHaE8&pid=Api&P=0&h=180",
    "Mint Lemon Juice":
      "https://tse3.mm.bing.net/th?id=OIP.F7jYIBsvwmGODJpbUbQGtQHaGL&pid=Api&P=0&h=180",
    "Masala Dosa":
      "https://tse3.mm.bing.net/th?id=OIP.0UWnU_HJ0V1PFn8Y3DgMzQAAAA&pid=Api&P=0&h=180",
    "Sambhar,Chutney":
      "https://tse4.mm.bing.net/th?id=OIP.qIZGyYIwsKve382FLOPeggHaFc&pid=Api&P=0&h=180",
    "Chicken Biryani":
      "https://tse2.explicit.bing.net/th?id=OIP.CddXDKNH4yDxmSW0qgV8LgHaFC&pid=Api&P=0&h=180",
    "Fruit Salad":
      "https://tse1.mm.bing.net/th?id=OIP.Qr_cYZdn0QBIE5egqL4BuwHaDt&pid=Api&P=0&h=180",
    "Red Chutney":
      "https://tse2.mm.bing.net/th?id=OIP.k0HGPGjk8F1CkzEfSmASIgHaGO&pid=Api&P=0&h=180",
    "Jeera Rice/Lemon Rice":
      "https://tse3.mm.bing.net/th?id=OIP.La2oZiHhN_XxrsraltefJQHaGX&pid=Api&P=0&h=180",
    "Jeera Aloo Fry":
      "https://www.zaykakatadka.com/wp-content/uploads/2017/11/jeera-aloo.jpeg",
    "Varieties of Juice":
      "https://tse2.mm.bing.net/th?id=OIP.uT6trGMdRKfh7amw8iVCwgHaEo&pid=Api&P=0&h=180",
    Chivda:
      "https://tse2.mm.bing.net/th?id=OIP.T7YFshT3IBzA0p3n_PvsyQHaHa&pid=Api&P=0&h=180",
    "Varieties of Paratha":
      "https://tse2.mm.bing.net/th?id=OIP.g3Td4IKJl4huwXe3ETjoVQHaE8&pid=Api&P=0&h=180",
    Sabji:
      "https://tse3.mm.bing.net/th?id=OIP.fnQk41le7QId-uAXzDqywQHaFC&pid=Api&P=0&h=180",
    Fruit:
      "https://tse3.mm.bing.net/th?id=OIP.JwjINLrMXiJp3pyZee-xFQHaF3&pid=Api&P=0&h=180",
    "Boiled Egg":
      "https://tse4.mm.bing.net/th?id=OIP.IhJ-FtVJ2GIoor2xsL8qNAHaE8&pid=Api&P=0&h=180",
    Sprouts:
      "https://tse4.mm.bing.net/th?id=OIP.g4Ts4UyA6TUY5MBSI2qV1AHaFj&pid=Api&P=0&h=180",
    "Bhel Puri":
      "https://tse1.mm.bing.net/th?id=OIP.TfmZUdrV91x6gVT-7TahLQHaE7&pid=Api&P=0&h=180",
    "Aloo Meal Maker":
      "https://tse1.mm.bing.net/th?id=OIP.HiS-pEphQzaAOPqnWSEkxwHaE4&pid=Api&P=0&h=180",
    Kheer:
      "https://tse4.mm.bing.net/th?id=OIP.wqoYiv64xx1C78Qko4-jgwHaEK&pid=Api&P=0&h=180",
    "Veg Hariyali":
      "https://tse3.mm.bing.net/th?id=OIP.z9nKThL9gnqxgCbmshXcvQHaEK&pid=Api&P=0&h=180",
    "Sweet Boondi":
      "https://tse4.mm.bing.net/th?id=OIP.HQ8WP4ZWbAXZR9J2SEDxGgHaFu&pid=Api&P=0&h=180",
    "Kadhai/Pepper Chicken":
      "https://tse4.mm.bing.net/th?id=OIP.qxeePaF7lAyrTkty0KjQxQHaEK&pid=Api&P=0&h=180",
    "Veg Korma":
      "https://tse1.mm.bing.net/th?id=OIP.gU0vqIOi_8yENF3h4aiCzAAAAA&pid=Api&P=0&h=180",
    "Tomato Dal":
      "https://tse3.mm.bing.net/th?id=OIP.JtZDcJ3LojkA9GMcjQ3l-wHaEK&pid=Api&P=0&h=180",
    "Salad/Chana Dal Fry":
      "https://tse2.mm.bing.net/th?id=OIP.Pq9hQp9N6lHjKy9klPu_JwHaJQ&pid=Api&P=0&h=180",
    "Egg Curry":
      "https://tse3.mm.bing.net/th?id=OIP.k_vM9dXkxrZU0rRNc-SGqAHaHa&pid=Api&P=0&h=180",
    "Pav Bhaji/Vermicelli Upma/Lemon Rice":
      "https://tse2.mm.bing.net/th?id=OIP.BqnGev1lwV5wDRFncQ4GtQHaE8&pid=Api&P=0&h=180",
    "Palak Dal":
      "https://tse4.mm.bing.net/th?id=OIP.3ShrY6ubM1wVuvGHJZbh_AHaE8&pid=Api&P=0&h=180",
    Chole:
      "https://tse2.mm.bing.net/th?id=OIP.Ksfgy_n4uOfagVQd5MB9bQHaGQ&pid=Api&P=0&h=180",
    "Khichdi/Imu Bhaat/Rice":
      "https://tse1.mm.bing.net/th?id=OIP.nZ_O3UVe0v2X1TrhJlHb_QHaHa&pid=Api&P=0&h=180",
    "Fried Rice/Noodles":
      "https://tse2.mm.bing.net/th?id=OIP.bggguituywrPH4X5INtUoQHaE8&pid=Api&P=0&h=180",
    "Gobi Manchurian Gravy":
      "https://tse4.mm.bing.net/th?id=OIP.cDikdwl4ufn7kRw2GBYJLgHaJ3&pid=Api&P=0&h=180",
    "Onion Lemon":
      "https://tse3.mm.bing.net/th?id=OIP.u5Dw6635zDHwHru2Y-QQnAHaE8&pid=Api&P=0&h=180",
    Fruits:
      "https://tse3.mm.bing.net/th?id=OIP.JwjINLrMXiJp3pyZee-xFQHaF3&pid=Api&P=0&h=180",
    "Veg 65":
      "https://tse3.mm.bing.net/th?id=OIP.S3aynJpSlDOh0Goy8f9WqwHaEK&pid=Api&P=0&h=180",
    Rajma:
      "https://tse3.mm.bing.net/th?id=OIP.8rpYttVfEbqmuMgNY_xFqwHaFj&pid=Api&P=0&h=180",
    "Fresh Juice":
      "https://tse2.mm.bing.net/th?id=OIP.qDxzkMV9UBEGgSH7-j7CmgHaE8&pid=Api&P=0&h=180",
    Dabeli:
      "https://tse3.mm.bing.net/th?id=OIP.c_-rE6FL_-j2CXWhnGCAKwHaFj&pid=Api&P=0&h=180",
    Biscuits:
      "https://tse3.mm.bing.net/th?id=OIP.HXVrc35MxFl2pjskRFkk2wHaFj&pid=Api&P=0&h=180",
    "Rajasthani Bhindi":
      "https://tse1.mm.bing.net/th?id=OIP.fEUKb_9pjnBqUK63P9viXQHaFK&pid=Api&P=0&h=180",
    "Puri Sabji":
      "https://tse3.mm.bing.net/th?id=OIP.0-yoze0D_-Kv2GGuJ7yiRwHaHa&pid=Api&P=0&h=180",
    "Fruits - Watermelon":
      "https://tse4.mm.bing.net/th?id=OIP.Kp70qDrQjNOqds5-T6_hBgHaF5&pid=Api&P=0&h=180",
    Pongal:
      "https://tse1.mm.bing.net/th?id=OIP.DoTdjps6EHArzJWKLw5KsAHaLH&pid=Api&P=0&h=180",
    Chhole: "https://kfoods.com/images1/newrecipeicon/chola-bhatura_5904.jpg",
    "Kadhai Veg":
      "https://tse1.mm.bing.net/th?id=OIP.6X_5Hibyc59oxuAdIhQUeAHaEK&pid=Api&P=0&h=180",
    "Aloo Cabbage Peas":
      "https://tse1.mm.bing.net/th?id=OIP.NkAkalKHwPTXK1Es_ROx2gHaEK&pid=Api&P=0&h=180",
    "Samosa/Kachori":
      "https://images.picxy.com/cache/2020/7/11/c9fd9fb245e7632f39fb7c6311384c72.jpg",
    "Pepper Chicken Dry":
      "https://tse3.mm.bing.net/th?id=OIP.pH_LCZS8L0LKxqDGCWTtXwHaEK&pid=Api&P=0&h=180",
    "Mughlai Paneer": "https://i.ytimg.com/vi/KFsv4_GHyPw/maxresdefault.jpg",
    "Idli/Vada":
      "https://tse4.mm.bing.net/th?id=OIP.WVy3hNyQJB4XAbgKKU1nwgHaEv&pid=Api&P=0&h=180",
    "Masoor Dal":
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Recipe_For_Beginners_One_Pot_Tadkewali_Masoor_Dal_Recipe-1.jpg",
    "Aloo Gobi Day":
      "https://tse1.mm.bing.net/th?id=OIP.eC4dopBEkzIKETZOZ2MBngHaE1&pid=Api&P=0&h=180",
    "Sambhar/Rasam":
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Recipe_Collection/10_Mindful_Combos_Of_Sambar_Poriyal_Rasam__To_Satiate_Tastebuds1.jpg",
    "Raw Banana Vegetable":
      "https://tse3.mm.bing.net/th?id=OIP.ktWbprGQrIBmGfIUSKqDhQHaJ4&pid=Api&P=0&h=180",
    "Chow mein":
      "https://tse1.mm.bing.net/th?id=OIP.jktGjHB4WOaMYui7g6eQ4wHaLG&pid=Api&P=0&h=180",
    "Onion Pakoda":
      "https://tse2.mm.bing.net/th?id=OIP.ijPAbEonuUH0jwHXhDMnSAHaE7&pid=Api&P=0&h=180",
    "Peas Masala":
      "https://tse1.mm.bing.net/th?id=OIP.eiPuOWa5Cbi6KvNocNvMfgHaGV&pid=Api&P=0&h=180",
    Poha: "https://tse1.mm.bing.net/th?id=OIP.2eCPGwUMweftS4SGFJOFdAHaEK&pid=Api&P=0&h=180",
    "Potato Fry/Aloo Palak":
      "https://tse4.mm.bing.net/th?id=OIP.mXOMdx05TuAA623uM0ZVcQHaEK&pid=Api&P=0&h=180",
    "Kaju Rice":
      "https://tse3.mm.bing.net/th?id=OIP.Zgl6yfqlHVoTkeLWFX3nDwHaEK&pid=Api&P=0&h=180",
    "Dahi Papdi Chaat":
      "https://tse1.mm.bing.net/th?id=OIP.2ijtwFNk6C628Uf3HqnfZgHaFy&pid=Api&P=0&h=180",
    "Chettinad Chicken":
      "https://tse1.mm.bing.net/th?id=OIP.5EWXslBGspzIFJpxKcl5cAHaE8&pid=Api&P=0&h=180",
    "Paneer Tikka Masala":
      "https://tse3.mm.bing.net/th?id=OIP.ZplRPK-V7EBz0IVjD5llQgHaE6&pid=Api&P=0&h=180",
    "Gobi Corn Masala":
      "https://tse4.mm.bing.net/th?id=OIP.FpX95yc2XLGqV3WTAurEwQHaGL&pid=Api&P=0&h=180",
    "Beetroot Dry":
      "https://tse1.mm.bing.net/th?id=OIP.Vv4oqLGcYWo7tpTrcIuUDAHaFj&pid=Api&P=0&h=180",
    "Bengali Dal":
      "https://tse1.mm.bing.net/th?id=OIP.cm5Cb_A3UM_btErjQVNGWQHaEK&pid=Api&P=0&h=180",
    "Dhokla/Chana":
      "https://tse1.mm.bing.net/th?id=OIP.Ph3MxDgNMz5Yde3w2MyGVQHaF8&pid=Api&P=0&h=180",
    "Achari Aloo":
      "https://tse1.mm.bing.net/th?id=OIP.bjJAnHfBUsg9TpTaxRicZAHaFj&pid=Api&P=0&h=180",
    Soup: "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Hearty-Vegetable-Split-Pea-Soup_exps73902_SD142780D08_20_3bC_RMS.jpg",
    "Aloo Gobi Paratha":
      "https://tse2.mm.bing.net/th?id=OIP.2Sg5Ty_t3VB5TmGyxIuE8gHaEK&pid=Api&P=0&h=180",
    "Dal Maharani":
      "https://tse3.mm.bing.net/th?id=OIP.9ncGl6KhzZiSwlRWs-5jiAHaLH&pid=Api&P=0&h=180",
    Paneer:
      "https://tse2.mm.bing.net/th?id=OIP.RvtSyNQKmCyDHrc6yEbi6gHaEK&pid=Api&P=0&h=180",
    "Boondi Raita":
      "https://tse4.mm.bing.net/th?id=OIP.3-LETnN6tiNHVceXGx1e4QHaGw&pid=Api&P=0&h=180",
    "Peanut Pakoda":
      "https://tse3.mm.bing.net/th?id=OIP.01R0camvuvgenzV_RqgMeAHaEK&pid=Api&P=0&h=180",
    "Spring Roll":
      "https://khinskitchen.com/wp-content/uploads/2021/02/DSC03140-1152x2048.jpg",
    "Ghee Rice":
      "https://tse1.mm.bing.net/th?id=OIP.7YanCPd7qmjMdfQJHp21ugHaE8&pid=Api&P=0&h=180",
    "Baingan Bharta":
      "https://www.seedsofindia.com/wp-content/uploads/2017/11/AdobeStock_66625511.jpeg",
  };

  const App = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [selectedDay, setSelectedDay] = useState("monday");
    const [selectedMeal, setSelectedMeal] = useState("breakfast");

    const handleDayChange = (e) => {
      setSelectedDay(e.target.value);
    };

    const handleMealChange = (e) => {
      setSelectedMeal(e.target.value);
    };

    const toggleMenuVisibility = () => {
      setToggleMenu(!toggleMenu);
    };

    const getMenu = (day, meal) => {
      return menuData[day][meal];
    };

    const getImageUrl = (foodItem) => {
      return imageUrls[foodItem];
    };

    const renderFoodItems = () => {
      const items = getMenu(selectedDay, selectedMeal);

      return items.map((item, index) => (
        <div key={index} className="food-item">
          <img src={getImageUrl(item)} alt={item} className="food-image" />
          <p className="food-name">{item}</p>
        </div>
      ));
    };

    return (
      <div>
        <h1 class="mess">Mess Menu</h1>
        <div className="containerr">
          <div id="selection">
            <div className="row">
              <label
                htmlFor="days"
                style={{ color: "rgb(62, 15, 57)", fontWeight: 600 }}
              >
                Select Day:
              </label>
              <select
                className="sel"
                id="days"
                value={selectedDay}
                onChange={handleDayChange}
              >
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>{" "}
              </select>
            </div>
            <div className="row">
              <label
                htmlFor="meals"
                style={{ color: "rgb(62, 15, 57)", fontWeight: 600 }}
              >
                Select Meal:
              </label>
              <select
                className="sel"
                id="meals"
                value={selectedMeal}
                onChange={handleMealChange}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snacks">Snacks</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
            <div class="show">
              <button className="bu" onClick={toggleMenuVisibility}>
                {toggleMenu ? "Hide Menu" : "Show Menu"}
              </button>
            </div>
            {toggleMenu && (
              <div>
                <h2 className="text">Menu</h2>
                <div className="menu">{renderFoodItems()}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return <App />;
}

export default Menu;
