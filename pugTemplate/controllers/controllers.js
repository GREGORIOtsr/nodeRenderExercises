const getView = (req, res) => {
    if (req.path == '/') {
        res.render('index', {name: 'Gregorio Tremont', url: 'https://www.youtube.com/embed/e_FsLeEexO4?si=KdIoLl8kr3ssxCIR'});
    } else {
        res.render(`${req.path.replace('/', '')}`, {location: 'https://maps.app.goo.gl/2EGRKoJszCn5BkKa6'})
    }
}

module.exports = getView;