const Image = require('../models/mongo/image')

const images = [
	{
		"id" : "an-introduction-cat-tax",
		"author" : {
			"name" : "dmitrizzle",
			"id" : "dmitrizzle"
		},
		"__v" : 0
	},
	{
		"id" : "brighton-beach-008",
		"author" : {
			"name" : "Lee Clark",
			"id" : "lee-clark"
		},
		"__v" : 0
	},
	{
		"id" : "brighton-beach-009",
		"author" : {
			"name" : "Lee Clark",
			"id" : "lee-clark"
		},
		"__v" : 0
	},
	{
		"id" : "brighton-beach-012",
		"author" : {
			"name" : "Lee Clark",
			"id" : "lee-clark"
		},
		"__v" : 0
	},
	{
		"id" : "brighton-beach-015",
		"author" : {
			"name" : "Lee Clark",
			"id" : "lee-clark"
		},
		"__v" : 0
	},
	{
		"id" : "brighton-beach-020",
		"author" : {
			"name" : "Lee Clark",
			"id" : "lee-clark"
		},
		"__v" : 0
	},
	{
		"id" : "brighton-beach-132",
		"author" : {
			"name" : "Lee Clark",
			"id" : "lee-clark"
		},
		"__v" : 0
	},
	{
		"id" : "forgotten-photo",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "lee-shanghai-1",
		"author" : {
			"name" : "Lee Webb",
			"id" : "lee-webb"
		},
		"__v" : 0
	},
	{
		"id" : "lee-shanghai-2",
		"author" : {
			"name" : "Lee Webb",
			"id" : "lee-webb"
		},
		"__v" : 0
	},
	{
		"id" : "lee-shanghai-3",
		"author" : {
			"name" : "Lee Webb",
			"id" : "lee-webb"
		},
		"__v" : 0
	},
	{
		"id" : "lee-shanghai-4",
		"author" : {
			"name" : "Lee Webb",
			"id" : "lee-webb"
		},
		"__v" : 0
	},
	{
		"id" : "robert-angles",
		"author" : {
			"name" : "Robert Davie",
			"id" : "robert-davie"
		},
		"__v" : 0
	},
	{
		"id" : "robert-bars",
		"author" : {
			"name" : "Robert Davie",
			"id" : "robert-davie"
		},
		"__v" : 0
	},
	{
		"id" : "robert-levers",
		"author" : {
			"name" : "Robert Davie",
			"id" : "robert-davie"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-bangkok",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-blossoms",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-boat",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-exhibition",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-jiufen",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-sunmoon-green",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-sunmoonboat",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-taroko",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-temple",
		"author" : {
			"name" : "Betty",
			"id" : "betty"
		},
		"__v" : 0
	},
	{
		"id" : "taiwan-tunnel",
		"author" : {
			"name" : "dmitrizzle",
			"id" : "dmitrizzle"
		},
		"__v" : 0
	},
	{
		"id" : "bailey-1",
		"author" : {
			"name" : "Bailey Tovar",
			"id" : "bailey-tovar"
		},
		"__v" : 0
	},
	{
		"id" : "bailey-2",
		"author" : {
			"name" : "Bailey Tovar",
			"id" : "bailey-tovar"
		},
		"__v" : 0
	},
	{
		"id" : "bailey-3",
		"author" : {
			"name" : "Bailey Tovar",
			"id" : "bailey-tovar"
		},
		"__v" : 0
	},
	{
		"id" : "bailey-4",
		"author" : {
			"name" : "Bailey Tovar",
			"id" : "bailey-tovar"
		},
		"__v" : 0
	},
	{
		"id" : "bailey-5",
		"author" : {
			"name" : "Bailey Tovar",
			"id" : "bailey-tovar"
		},
		"__v" : 0
	},
	{
		"id" : "bailey-6",
		"author" : {
			"name" : "Bailey Tovar",
			"id" : "bailey-tovar"
		},
		"__v" : 0
	}
]


const seed = () => images.map(i => Image.create(i))

module.exports = seed
