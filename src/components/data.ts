
export interface Game {
  name: string;
  image: string;
  link: string;
  value: number;
  head: string;
  desc: string;
  intro: string;
  width: string;
  height: string;
  src: string;
  title: string;
  frameBorder: string;
  allow: string;
  referrerPolicy: string;
  site: string;
}



//an array to store some hard code i know i could have saved it in database but didn't had enough time
export const gamesData: Game[] = [
  {
    name: "Sheep Farm",
    image: "https://sqwenqscyfbxhohpeesi.supabase.co/storage/v1/object/public/images/b35fc7ab-6f29-4c2b-91d3-38069124082b-549d05df-14ce-436b-bbe7-ad50082ddfa8-sheep%20farm.png",
    link: "https://www.captainside.com/games/SheepFarm_in-METALAND",
    value:0,
    head:"SHEEP FARM IN-META LAND",
    desc:"Welcome to Sheepfarm! In this sweet virtual world, you can acquire pastures,nurture ambitious sheep, and reap the rewards...",
    intro:"In the peaceful meadows of Sugarland, shepherds and their sheep thrived in a sweet paradis where the air was tinged with the scent of candies and snacks. These sweet treats formed Sugarland's charm for its residents and sheep alike.",
    width:"560",
    height:"315",
    src:"https://www.youtube.com/embed/k8PNBlp8WlY?si=wa92IWGEM-UprDKa",
    title:"YouTube video player",
    frameBorder:"0",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy:"strict-origin-when-cross-origin",
    site:"https://sheepfarm.io/"
  },
  {
    name: "Farcana",
    image: "https://sqwenqscyfbxhohpeesi.supabase.co/storage/v1/object/public/images/3eb857fa-a5ba-4ee9-a5ef-99e085e854a0-FARCANA%20VERTICAL.webp",
    link: "https://www.captainside.com/games/Farcana",
    value:1,
    head:"Farcana Playtest",
    desc:"Farcana is a PvP team shooter set on Mars in XXII century. Play as one of the heroes and destroy the competition in fast paced combat!",
    intro:"Farcana is a PvP team-based third-person hero shooter set in a futuristic sci-fi universe on Mars. The game features a wide range of Stars, each with their own unique abilities and weapons. Play for free!",
    width:"560" ,
    height:"315" ,
    src:"https://www.youtube.com/embed/5P8Km-xIMnY?si=AH-OV646RdhioG1J" ,
    title:"YouTube video player" ,
    frameBorder:"0",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", 
    referrerPolicy:"strict-origin-when-cross-origin",
    site:"https://www.farcana.com/"
  },
  {
    name: "77-BIT",
    image: "https://sqwenqscyfbxhohpeesi.supabase.co/storage/v1/object/public/images/5f05510f-326d-4b06-9ae9-7d907da258ee-77%20bit%20vertical.webp",
    link: "https://www.captainside.com/games/77-BIT",
    value:2,
    head:"77-BIT",
    desc:"Enter the world of 77-Bit, a cyberpunk game where an AI invasion has torn reality apart",
    intro:" Play as a resistance fighter, battling for humanity’s survival across a variety of dynamic environments, from underground dungeons to the untamed Wilds. Whether you enjoy leveling up, crafting powerful gear, or testing your skills in intense PvP modes",
    width:"560" ,
    height:"315",
    src:"https://www.youtube.com/embed/sW4VerN7hKQ?si=ZovMVxRQYzIWXfui",
    title:"YouTube video player" ,
    frameBorder:"0",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ,
    referrerPolicy:"strict-origin-when-cross-origin" ,
    site:"https://bithub.77-bit.com/"
  },
  {
    name: "Diverse World",
    image: "https://sqwenqscyfbxhohpeesi.supabase.co/storage/v1/object/public/images/3d8b944a-b03f-483d-8c16-43d4cf191ae9-deverse_vertical.webp",
    link: "https://www.captainside.com/games/Deverse_World",
    value:3,
    head:"Deverse World",
    desc:"Deverse World is role-playing game with fusion of RTS, shooter and sandbox adventure revolving around base building versus base raiding across infinite procedural floating isles",
    intro:" Players construct their bases on procedural generative floating isles and defend against other players. Players can play alone or join a crew of 2 in the journey of conquering and raiding others bases for resources, earning rewards while climbing the global leaderboard",
    width:"560",
    height:"315",
    src:"https://www.youtube.com/embed/Fzu1OVWHuS4?si=0N5OkPIAqX3G2xva",
    title:"YouTube video player",
    frameBorder:"0",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy:"strict-origin-when-cross-origin",

    site:"https://www.deverse.world/"
  },
  {
    name: "Forge Arena",
    image: "https://sqwenqscyfbxhohpeesi.supabase.co/storage/v1/object/public/images/93704571-dfc8-41be-a6fa-8f255768bd42-FROGE%20ARENA%20VERTICAL.webp",
    link: "https://www.captainside.com/games/Forge_Arena",
    value:4,
    head:"Newgen Labs Forge Arena",
    desc:"The Forge Arena is a competitive blockchain-based first-person shooter (FPS) game that caters to both casual and competitive gamers",
    intro:"It features two primary game modes: Hybrid Competitive (5v5) and Team Deathmatch (8v8), each offering a unique and thrilling battle experience. The game is designed with an Esports framework in mind, aiming to provide a controlled combat environment that is both fun and intense",
    width:"560",
    height:"315",
    src:"https://www.youtube.com/embed/1RhkkpP3P2U?si=Y2HpIL7dErnL50rW",
    title:"YouTube video player",
    frameBorder:"0",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy:"strict-origin-when-cross-origin",

    site:"https://playforge.gg/"

  },
];
