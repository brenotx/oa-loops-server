const passport = require('passport');

const Authentication = require('./controllers/authentication');
const Nivel = require('./controllers/nivel');
const GameNivel = require('./controllers/gameNivel');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    app.post('/nivel', Nivel.addNivelStats);
    app.get('/nivelStats', Nivel.getNivelStats);
    app.post('/gameNivel', GameNivel.addGameNivelStats);
    app.get('/getGameNivel', GameNivel.getGameNivelStats);
}