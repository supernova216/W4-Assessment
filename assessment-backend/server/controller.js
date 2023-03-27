let fortunes = ["An important person will offer you support.", "Believe in yourself and others will too.", "Don’t worry; prosperity will knock on your door soon.",
"It is better to be an optimist and proven a fool than to be a pessimist and be proven right.","The best prediction of future is the past."];

module.exports = {

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    postFortune: (req,res) => {
        const {quote} = req.body
        
        fortunes.push(quote)

        res.status(200).send(fortunes)
    },
    
    deleteFortune: (req, res) => {
        let index = req.params.id - 1

        fortunes.splice(index, 1)

        res.status(200).send(fortunes)

    },
    getAll: (req, res) => {
        res.status(200).send(fortunes)
    },
}