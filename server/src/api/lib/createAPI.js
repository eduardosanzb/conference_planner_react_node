import { handleSuccess, handleError } from './handlers';
/**
 * REST API POST
 * Generic call
 * @param {Object} req 
 * @param {Object} res 
 */
async function list(req, res) {
  try {
    const data = await this.model.find();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
}
/**
 * REST API POST
 * Generic call
 * @param {Object} req 
 * @param {Object} res 
 */
async function show(req, res) {
  const { id } = req.params;
  try {
    const data = await this.model.findById(id);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
}
/**
 * REST API POST a new element to the model
 * Generic call
 * @param {Object} req 
 * @param {Object} res 
 */
async function create(req, res) {
  const { body } = req;
  try {
    const data = await this.model.create(body);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
}

async function destroy(req, res) {
  const { id } = req.params;
  try {
    const data = await this.model.findById(id).remove();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
}

async function update(req, res) {
  const { params: { id }, body } = req;
  try {
    const data = await this.model.update({ _id: id }, body);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
}

function createAPI(model) {
  this.model = model;
  return {
    list: list.bind(this),
    show: show.bind(this),
    create: create.bind(this),
    destroy: destroy.bind(this),
    update: update.bind(this)
  };
}

module.exports = createAPI;
