/**
 * @function findByTestAttr
 * @param {shalloWrapper } wrapper 
 * @param { string } value 
 * @returns { shalloWrapper }
 */
export const findByTestAttr = (wrapper, value) =>{
    return wrapper.find(`[data-test="${value}"]`);
}