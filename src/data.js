const data=[
      {
          "id": 1,
          "title": "Modern Apartment in Mumbai",
          "description": "A sleek, modern apartment located in the heart of Mumbai with stunning city views.",
          "image": "https://images.unsplash.com/photo-1600607688949-25a14efc74a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxMzc3&ixlib=rb-4.0.3&q=80&w=400",
          "price": 50000,
          "location": "Mumbai, Maharashtra",
          "bedrooms": 2,
          "amenities": ["WiFi", "Air Conditioning", "Gym", "Parking"]
      },
      {
          "id": 2,
          "title": "Luxury Villa in Bangalore",
          "description": "A luxurious villa in a quiet suburb of Bangalore with a private pool and garden.",
          "image": "https://images.unsplash.com/photo-1560185007-5a0413a724cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNDU4&ixlib=rb-4.0.3&q=80&w=400",
          "price": 120000,
          "location": "Bangalore, Karnataka",
          "bedrooms": 4,
          "amenities": ["Private Pool", "Garden", "Parking", "Security"]
      },
      {
          "id": 3,
          "title": "Cozy Studio in Pune",
          "description": "A cozy studio apartment in Pune, perfect for singles or couples.",
          "image": "https://images.unsplash.com/photo-1600607688949-25a14efc74a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxMzc3&ixlib=rb-4.0.3&q=80&w=400",
          "price": 25000,
          "location": "Pune, Maharashtra",
          "bedrooms": 1,
          "amenities": ["WiFi", "Air Conditioning", "24/7 Water Supply"]
      },
      {
          "id": 4,
          "title": "Spacious 3 BHK in Hyderabad",
          "description": "A spacious 3 BHK apartment in the heart of Hyderabad with modern amenities.",
          "image": "https://images.unsplash.com/photo-1505691723518-36a496d3b90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNTI0&ixlib=rb-4.0.3&q=80&w=400",
          "price": 80000,
          "location": "Hyderabad, Telangana",
          "bedrooms": 3,
          "amenities": ["WiFi", "Gym", "Parking", "Swimming Pool"]
      },
      {
          "id": 5,
          "title": "Modern Apartment in Delhi",
          "description": "A modern apartment in Delhi with easy access to shopping and dining.",
          "image": "https://images.unsplash.com/photo-1572120360610-d971b9b788d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNTg1&ixlib=rb-4.0.3&q=80&w=400",
          "price": 60000,
          "location": "Delhi, Delhi",
          "bedrooms": 2,
          "amenities": ["WiFi", "Air Conditioning", "Parking", "Security"]
      },
      {
          "id": 6,
          "title": "Penthouse in Chennai",
          "description": "A luxurious penthouse in Chennai with panoramic views of the city.",
          "image": "https://images.unsplash.com/photo-1605276375405-a6f2f35f0035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNjYw&ixlib=rb-4.0.3&q=80&w=400",
          "price": 150000,
          "location": "Chennai, Tamil Nadu",
          "bedrooms": 4,
          "amenities": ["Terrace", "Gym", "Private Pool", "Security"]
      },
      {
          "id": 7,
          "title": "Compact Flat in Kolkata",
          "description": "A compact flat in Kolkata, ideal for working professionals.",
          "image": "https://images.unsplash.com/photo-1552158073-145c6b3be7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNjky&ixlib=rb-4.0.3&q=80&w=400",
          "price": 35000,
          "location": "Kolkata, West Bengal",
          "bedrooms": 1,
          "amenities": ["WiFi", "24/7 Water Supply", "Security"]
      },
      {
          "id": 8,
          "title": "Elegant 2 BHK in Ahmedabad",
          "description": "An elegant 2 BHK apartment in Ahmedabad with a beautiful garden view.",
          "image": "https://images.unsplash.com/photo-1581993199839-5bb602f33044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNzE2&ixlib=rb-4.0.3&q=80&w=400",
          "price": 55000,
          "location": "Ahmedabad, Gujarat",
          "bedrooms": 2,
          "amenities": ["WiFi", "Air Conditioning", "Parking", "Garden"]
      },
      {
          "id": 9,
          "title": "Luxury Villa in Goa",
          "description": "A luxurious villa in Goa with a private beach and infinity pool.",
          "image": "https://images.unsplash.com/photo-1512918728679-efb0f36a05a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNzM4&ixlib=rb-4.0.3&q=80&w=400",
          "price": 200000,
          "location": "Goa, Goa",
          "bedrooms": 5,
          "amenities": ["Private Beach", "Infinity Pool", "Garden", "Security"]
      },
      {
          "id": 10,
          "title": "Spacious 3 BHK in Chandigarh",
          "description": "A spacious 3 BHK apartment in a serene neighborhood in Chandigarh.",
          "image": "https://images.unsplash.com/photo-1574680096145-d8e1ec8bc244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNzU2&ixlib=rb-4.0.3&q=80&w=400",
          "price": 70000,
          "location": "Chandigarh, Punjab",
          "bedrooms": 3,
          "amenities": ["WiFi", "Air Conditioning", "Gym", "Parking"]
      },
      {
          "id": 11,
          "title": "Modern Studio in Jaipur",
          "description": "A modern studio apartment in the Pink City, Jaipur, with easy access to local markets.",
          "image": "https://images.unsplash.com/photo-1593941707880-bfdc9ed1f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNzc4&ixlib=rb-4.0.3&q=80&w=400",
          "price": 30000,
          "location": "Jaipur, Rajasthan",
          "bedrooms": 1,
          "amenities": ["WiFi", "24/7 Water Supply", "Security"]
      },
      {
          "id": 12,
          "title": "Elegant Bungalow in Lucknow",
          "description": "An elegant bungalow in Lucknow with a large garden and spacious rooms.",
          "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNzk2&ixlib=rb-4.0.3&q=80&w=400",
          "price": 90000,
          "location": "Lucknow, Uttar Pradesh",
          "bedrooms": 4,
          "amenities": ["WiFi", "Parking", "Garden", "Security"]
      },
      {
          "id": 13,
          "title": "Affordable Flat in Surat",
          "description": "An affordable 2 BHK flat in Surat, close to public transport and shopping centers.",
          "image": "https://images.unsplash.com/photo-1560185127-6a706db6187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxODAz&ixlib=rb-4.0.3&q=80&w=400",
          "price": 20000,
          "location": "Surat, Gujarat",
          "bedrooms": 2,
          "amenities": ["WiFi", "24/7 Water Supply", "Parking"]
      },
      {
          "id": 14,
          "title": "Penthouse in Noida",
          "description": "A luxurious penthouse in Noida with stunning city views and modern amenities.",
          "image": "https://images.unsplash.com/photo-1512918733438-488d9f0ae9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxODA1&ixlib=rb-4.0.3&q=80&w=400",
          "price": 140000,
          "location": "Noida, Uttar Pradesh",
          "bedrooms": 4,
          "amenities": ["WiFi", "Gym", "Swimming Pool", "Security"]
      },
      {
          "id": 15,
          "title": "Family Home in Coimbatore",
          "description": "A spacious family home in Coimbatore with a large backyard and modern interiors.",
          "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxODM3&ixlib=rb-4.0.3&q=80&w=400",
          "price": 65000,
          "location": "Coimbatore, Tamil Nadu",
          "bedrooms": 3,
          "amenities": ["WiFi", "Parking", "Garden", "Security"]
      },
      {
          "id": 16,
          "title": "Modern Apartment in Indore",
          "description": "A modern 2 BHK apartment in Indore, perfect for working professionals and families.",
          "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxODcx&ixlib=rb-4.0.3&q=80&w=400",
          "price": 40000,
          "location": "Indore, Madhya Pradesh",
          "bedrooms": 2,
          "amenities": ["WiFi", "Air Conditioning", "Parking"]
      },
      {
          "id": 17,
          "title": "Luxury Villa in Kochi",
          "description": "A luxurious villa in Kochi with a private garden and modern interiors.",
          "image": "https://images.unsplash.com/photo-1600373205062-044b9ddd6a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxOTIw&ixlib=rb-4.0.3&q=80&w=400",
          "price": 120000,
          "location": "Kochi, Kerala",
          "bedrooms": 4,
          "amenities": ["WiFi", "Private Garden", "Parking", "Security"]
      },
      {
          "id": 18,
          "title": "Affordable 2 BHK in Patna",
          "description": "An affordable 2 BHK apartment in Patna, perfect for small families.",
          "image": "https://images.unsplash.com/photo-1595433562696-fc2cf447028b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxOTg4&ixlib=rb-4.0.3&q=80&w=400",
          "price": 25000,
          "location": "Patna, Bihar",
          "bedrooms": 2,
          "amenities": ["WiFi", "24/7 Water Supply", "Parking"]
      },
      {
          "id": 19,
          "title": "Modern Flat in Nagpur",
          "description": "A modern flat in Nagpur with easy access to local markets and public transport.",
          "image": "https://images.unsplash.com/photo-1600607688949-25a14efc74a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNzM4&ixlib=rb-4.0.3&q=80&w=400",
          "price": 30000,
          "location": "Nagpur, Maharashtra",
          "bedrooms": 2,
          "amenities": ["WiFi", "Parking", "24/7 Water Supply"]
      },
      {
          "id": 20,
          "title": "Spacious Bungalow in Bhopal",
          "description": "A spacious bungalow in Bhopal with a large garden and modern interiors.",
          "image": "https://images.unsplash.com/photo-1600373205062-044b9ddd6a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNTI0&ixlib=rb-4.0.3&q=80&w=400",
          "price": 75000,
          "location": "Bhopal, Madhya Pradesh",
          "bedrooms": 4,
          "amenities": ["WiFi", "Private Garden", "Parking", "Security"]
      },
      {
          "id": 21,
          "title": "Affordable 1 BHK in Thiruvananthapuram",
          "description": "An affordable 1 BHK apartment in Thiruvananthapuram, ideal for singles or couples.",
          "image": "https://images.unsplash.com/photo-1605276375405-a6f2f35f0035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjQyOTAxNjYw&ixlib=rb-4.0.3&q=80&w=400",
          "price": 20000,
          "location": "Thiruvananthapuram, Kerala",
          "bedrooms": 1,
          "amenities": ["WiFi", "24/7 Water Supply", "Security"]
      }
  ]


  export default data;
  