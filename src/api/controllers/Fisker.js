import Fisker from '../models/Fisker';

function getAll(req, res) {
  res.json({ users: Fisker.find() });
}

function save(req, res) {
  res.json({ success: Fisker.save(req.body), description: 'Fisker added' });
}

function getOne(req, res) {
	let id = req.swagger.params.id.value;
  let user = Fisker.find(id);
}

function update(req, res) {
	
}

function delUser(req, res) {

}

export { getAll, save, getOne, update, delUser };
