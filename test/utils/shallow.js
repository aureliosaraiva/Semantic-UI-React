import { shallow } from 'enzyme'

const meetsName = (wrapper, name) => name === wrapper.type().name

export default (...args) => {
  let wrapper = shallow(...args)

  if (meetsName(wrapper, 'refHOC')) wrapper = wrapper.dive()
  if (meetsName(wrapper, 'Ref')) wrapper = wrapper.dive()

  return wrapper
}
