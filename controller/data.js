let akteri = [
  {
    ime: "Johnny",
    prezime: "Depp",
  },
  {
    ime: "Brad",
    prezime: "Pitt",
  },
  {
    ime: "Angelina",
    prezime: "Jolie",
  },
  {
    ime: "Sylvester",
    prezime: "Stallone",
  },
];

let filmovi = ["John Wick", "The Equalizer", "Elysium", "Glass"];

exports.getAkteri = (req, res) => {
  res.render("akteri", { akteri });
};

exports.getFilmovi = (req, res) => {
  res.render("filmovi", { filmovi });
};

exports.postNewAkter = (req, res) => {
  req.body;

  const newAkter = {
    ime: req.body.ime,
    prezime: req.body.prezime,
  };

  akteri.push(newAkter);
  res.render("akteri", { akteri });
};

exports.postNewFilm = (req, res) => {
  req.body;

  const newFilm = req.body.film;

  filmovi.push(newFilm);
  res.render("filmovi", { filmovi });
};
