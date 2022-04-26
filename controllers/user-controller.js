// import users from "./users/users.js";
import userDao from '../controllers/dbase/users/user-dao.js';

const userController = (app) => {
    //createProfile:
    app.post('/api/user-admin', createProfileAdmin);
    app.post('/api/user-buyer', createProfileBuyer);
    app.post('/api/user-seller', createProfileSeller);
    //findProfileById:
    app.get('/api/user-admin/:uid', findProfileByIdAdmin);
    app.get('/api/user-buyer/:uid', findProfileByIdBuyer);
    app.get('/api/user-seller/:uid', findProfileByIdSeller);
    //findProfileByEmail:
    app.get('/api/user-admin/email/:email', findProfileByEmailAdmin);
    app.get('/api/user-buyer/email/:email', findProfileByEmailBuyer);
    app.get('/api/user-seller/email/:email', findProfileByEmailSeller);
    //findAllProfile:
    app.get('/api/user-admin', findAllProfileAdmin);
    app.get('/api/user-buyer', findAllProfileBuyer);
    app.get('/api/user-seller', findAllProfileSeller);
    //delete:
    app.delete('/api/user-admin/:uid', deleteProfileAdmin);
    app.delete('/api/user-buyer/:uid', deleteProfileBuyer);
    app.delete('/api/user-seller/:uid', deleteProfileSeller);
    // app.put('/api/seller-follow/:uid', followSeller);
    // app.put('/api/seller-unfollow/:uid', unfollowSeller);
    // update-seller like & posted
    app.put('/api/seller-addlike/:uid', addlikedItemSeller);
    app.put('/api/seller-removelike/:uid', removelikedItemSeller);
    app.put('/api/seller-posted/:uid', postedItemsSeller);
    app.put('/api/seller-unposted/:uid', unpostedItemSeller);
    // update-buyer like, adopted, follow
    app.put('/api/buyer-addlike/:uid', addlikedItemBuyer);
    app.put('/api/buyer-removelike/:uid', removelikedItemBuyer);
    app.put('/api/buyer-posted/:uid', addPostedItemBuyer);
    app.put('/api/buyer-unposted/:uid', removePostedItemBuyer);
    //app.put('/api/buyer-addpost/:uid', addPostedItemBuyer);
    //app.put('/api/buyer-removepost/:uid', removePostedItemBuyer);


}


// create new profile(somewhat same as signup) admin
const createProfileAdmin = async (req, res) => {
    const user = req.body;
    const insertUser = await userDao.createProfileAdmin(user);

    res.json(insertUser);
}

// create new profile(somewhat same as signup) buyer
const createProfileBuyer = async (req, res) => {
    const user = req.body;
    const insertUser = await userDao.createProfileBuyer(user);

    res.json(insertUser);
}

// create new profile(somewhat same as signup) seller
const createProfileSeller = async (req, res) => {
    const user = req.body;
    const insertUser = await userDao.createProfileSeller(user);

    res.json(insertUser);
}

// find user admin using ID
const findProfileByIdAdmin = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdAdmin(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user buyer using ID
const findProfileByIdBuyer = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdBuyer(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user seller using ID
const findProfileByIdSeller = async (req, res) => {
    const userId = req.params.uid;
    const user = await userDao.findProfileByIdSeller(userId);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user admin by email
const findProfileByEmailAdmin = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailAdmin(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user buyer by email
const findProfileByEmailBuyer = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailBuyer(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find user seller by email
const findProfileByEmailSeller = async (req, res) => {
    const userEmail = req.params['email'];
    const user = await userDao.findProfileByEmailSeller(userEmail);

    if (user) {
        res.json(user);                                             // user is in database
    } else {
        res.sendStatus(404);                                        // user not found
    }
}

// find all users admin
const findAllProfileAdmin = async (req, res) => {
    const user = await userDao.findAllProfileAdmin();
    res.json(user);
}

// find all users buyer
const findAllProfileBuyer = async (req, res) => {
    const user = await userDao.findAllProfileBuyer();
    res.json(user);
}

// find all users seller
const findAllProfileSeller = async (req, res) => {
    const user = await userDao.findAllProfileSeller();
    res.json(user);
}

// delete profile admin
const deleteProfileAdmin = async (req, res) => {
    const userId = req.params.uid;
    const userDel = await userDao.deleteProfileAdmin(userId);

    res.json(userDel);
}

// delete profile admin
const deleteProfileBuyer = async (req, res) => {
    const userId = req.params.uid;
    const userDel = await userDao.deleteProfileBuyer(userId);

    res.json(userDel);
}

// delete profile seller
const deleteProfileSeller = async (req, res) => {
    const userId = req.params.uid;
    const userDel = await userDao.deleteProfileSeller(userId);

    res.json(userDel);
}

// add liked item seller
const addlikedItemSeller = async (req, res) => {
    const updateItem = req.body['likedItems'];
    const userID = req.params.uid;

    const status = await userDao.addlikedItemSeller(userID, updateItem);

    res.json(status);
}

// remove liked item seller
const removelikedItemSeller = async (req, res) => {
    const updateItem = req.body['likedItems'];
    const userID = req.params.uid;

    const status = await userDao.removelikedItemSeller(userID, updateItem);

    res.json(status);
}

// add adopted item seller
const postedItemsSeller = async (req, res) => {
    const updateItem = req.body['postedItems'];
    const userID = req.params.uid;

    const status = await userDao.postedItemsSeller(userID, updateItem);

    res.json(status);
}

// remove adopted item seller
const unpostedItemSeller = async (req, res) => {
    const updateItem = req.body['postedItems'];
    const userID = req.params.uid;

    const status = await userDao.unpostedItemSeller(userID, updateItem);

    res.json(status);
}

// add adopted item seller
const followSeller = async (req, res) => {
    const updateItem = req.body['following'];
    const userID = req.params.uid;

    const status = await userDao.followSeller(userID, updateItem);

    res.json(status);
}

// remove adopted item seller
const unfollowSeller = async (req, res) => {
    const updateItem = req.body['following'];
    const userID = req.params.uid;

    const status = await userDao.unfollowSeller(userID, updateItem);

    res.json(status);
}

// add liked item buyer
const addlikedItemBuyer = async (req, res) => {
    const updateItem = req.body['likedItems'];
    const userID = req.params.uid;

    const status = await userDao.addlikedItemBuyer(userID, updateItem);

    res.json(status);
}

// remove liked item buyer
const removelikedItemBuyer = async (req, res) => {
    const updateItem = req.body['likedItems'];
    const userID = req.params.uid;

    const status = await userDao.removelikedItemBuyer(userID, updateItem);

    res.json(status);
}

// add adopted item buyer
const addPostedItemBuyer = async (req, res) => {
    const updateItem = req.body['postedItems'];
    console.log(updateItem)
    const userID = req.params.uid;
    console.log(userID)

    const status = await userDao.addPostedItemBuyer(userID, updateItem);

    res.json(status);
}

// remove adopted item buyer
const removePostedItemBuyer = async (req, res) => {
    const updateItem = req.body['postedItems'];
    console.log(updateItem)
    const userID = req.params.uid;
    console.log(userID)

    const status = await userDao.removePostedItemBuyer(userID, updateItem);

    res.json(status);
}

export default userController;