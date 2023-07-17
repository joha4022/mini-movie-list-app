/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1, 
      title: 'Indiana Jones and the Last Crusade', 
      released: '1989', 
      rating: 'PG-13',
      description: 'In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFjFfcQKJic1k9cML1S2WglKllKTU6IoVBswXuSLN8HoZugGG',
      director: 'Steven Spielberg'
    },
    {
      id: 2, 
      title: 'Indiana Jones: Raiders of the Lost Ark', 
      released: "1981", 
      rating: 'PG',
      description: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje0ryKq-KY9fseWKXpTBKX4_sYUt6Gar9JjErzMOCA2DU_ATw',
      director: 'Steven Spielberg'
    },
    {
      id: 3, 
      title: 'Dune: Part One', 
      released: "2021", 
      rating: 'PG-13',
      description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future",
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPqS6UaUbAFXbexufzQLa9PrCxjjw5MFTsEjsDC0ppVOhBcrmw',
      director: 'Denis Villeneuve'
    },
    {
      id: 4, 
      title: 'Interstellar', 
      released: "2014", 
      rating: 'PG-13',
      description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUw076GR7JpnfExoBLTMpiE9otUzk518SylUdC1roF6Ah63NS9',
      director: 'Christopher Nolan'
    },
    {
      id: 5, 
      title: 'Inception', 
      released: '2010', 
      rating: 'PG-13',
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1wNJi3WBo8wjZ-lxg4xPbg6-X7tQ1w6ZFI5L-RH1rUiOOGxLO',
      director: 'Christopher Nolan'
    },
    {
      id: 6, 
      title: 'Forrest Gump', 
      released: "1994", 
      rating: 'PG-13',
      description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvJZAr8HsQLqTb0cnw-2SaBI3-8GbmHLz778B-N7PhQZAvAcAU',
      director: 'Robert Zemeckis'
    },
    {
      id: 7, 
      title: 'Fight Club', 
      released: "1999", 
      rating: 'R',
      description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSor8IGjk4o_CD4Tc6I4JQL3AFKtSpaMr_YvsbWmZ4kfNqiORHO',
      director: 'David Fincher'
    },
    {
      id: 8, 
      title: 'Knives Out: Glass Onion', 
      released: "2022", 
      rating: 'PG-13',
      description: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsCOutAlEgJqoCBlWwQv2_JouNTHegA5KnsfRPGeB6_tZlelyk',
      director: 'Rian Johnson'
    },
    {
      id: 9, 
      title: 'Django Unchained', 
      released: "2012", 
      rating: 'R',
      description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt',
      director: 'Quentin Tarantino'
    },
    {
      id: 10, 
      title: 'Oppenheimer', 
      released: "2023", 
      rating: 'R',
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      img: 'https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900',
      director: 'Christopher Nolan'
    },

  ]);
};
