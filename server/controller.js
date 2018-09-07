module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_all_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  postHouse: (req, res) => {
    const { property_name, address, city, state, zipcode } = req.body;
    const db = req.app.get("db");
    db.post_house({ property_name, address, city, state, zipcode }).then(
      houses => {
        res.status(200).send(houses);
      }
    )
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house({id}).then(
       houses => {
           res.status(200).send(houses)
       } 
    )
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
