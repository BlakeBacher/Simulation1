module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send())
    },
    addProduct: (req,res) =>{
        
        const db = req.app.get('db');
        const {imageURL, product, price}=req.body
        db.create_product([imageURL,product,price])
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send())
    }
}