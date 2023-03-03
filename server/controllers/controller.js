
export const getLandingPage = (req,res) =>{
    res.render('index.astro')
}

export const getTasks = (req,res) => {
    res.send("respoding")
}

export const createTask = (req,res) => {
    res.send("created")
}

