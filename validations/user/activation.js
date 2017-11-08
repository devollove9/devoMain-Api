/**
 * Created by devo on 10/31/2017.
 */
import { joiValidate as Joi } from 'devomain-libs'

const schema = Joi.object().keys(
    {
        username: Joi.username()
    }
)

export default schema
