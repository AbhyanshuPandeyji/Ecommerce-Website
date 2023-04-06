module.exports = theFunc => (req, res, next) => {

    // same as try and catch -
    // Promise.resolve(theFunc(req,res,res)) is the part where the try happen -
    // the theFunc is the function that is in the try
    // .catch to catch if the function doesn't works
    Promise.resolve(theFunc(req, res, res)).catch(next)
}
