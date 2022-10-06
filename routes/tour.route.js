const express = require("express")
const router = express.Router()

const TourController = require("../controllers/tour.controller")

router.route('/')
.get(TourController.getTours)
.post(TourController.createTour)

router.route('/trending')
.get(TourController.getTrendingTours)

router.route('/cheapest')
.get(TourController.getCheapestTours)

router.route("/:id")
.get(TourController.getTourById)
.patch(TourController.updateTour)

module.exports = router