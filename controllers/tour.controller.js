const { getToursService, createTourService, getTourByIdService, updateTourService, getTrendingToursService, getCheapestToursService } = require("../services/tour.services")

exports.getTours= async (req, res, next)=>{
    try {
        const filters = {...req.query};

        // Sort, Page, Limit Exclude
        const excludeFields = ['sort', 'page', 'limit', 'fields']
        excludeFields.forEach(field => delete filters[field])

        const queries = {};
        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }

        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields 
        }

        if(req.query.page){
            const {page=1, limit=10} = req.query
            const skip = (page-1)*parseInt (limit)
            queries.skip = skip
            queries.limit = parseInt(limit)
        }

        const tours = await getToursService(filters, queries)

        res.status(200).json({
            status: "success",
            message: "Successfully got the data",
            data: tours
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get the data",
            error: error.message
        })
    }
}

exports.getTrendingTours= async (req, res, next)=>{
    try {
        const tours = await getTrendingToursService()

        res.status(200).json({
            status: "success",
            message: "Successfully got the data",
            data: tours
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get the data",
            error: error.message
        })
    }
}

exports.getCheapestTours= async (req, res, next)=>{
    try {
        const tours = await getCheapestToursService()

        res.status(200).json({
            status: "success",
            message: "Successfully got the data",
            data: tours
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get the data",
            error: error.message
        })
    }
}

exports.getTourById= async (req, res, next)=>{
    try {
        const tour = await getTourByIdService(req.params.id)

        res.status(200).json({
            status: "success",
            message: "Successfully got the data",
            data: tour
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get the data",
            error: error.message
        })
    }
}

exports.createTour =  async (req, res, next) => {
    try {
       const response = await createTourService(req.body)

       res.status(200).json({
           status: "success",
           message: "Data inserted successfully",
           data: response
       })
    } catch (error) {
       res.status(400).json({
           status: "fail",
           message: "Data wasn't inserted",
           error: error.message
       })
    }
}

exports.updateTour =  async (req, res, next) => {
    try {
       const response = await updateTourService(req.params.id, req.body)

       res.status(200).json({
           status: "success",
           message: "Data updated successfully",
           data: response
       })
    } catch (error) {
       res.status(400).json({
           status: "fail",
           message: "Data wasn't updated",
           error: error.message
       })
    }
}
