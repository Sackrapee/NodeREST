const express = require('express');
const Sequelize = require('Sequelize');
const app = express();

app.use(express.json());

const dbUrl = 'postgres://webadmin:HXAsdf17487@http://noderest.proen.app.ruk-com.cloud:11478/Books'

const sequelize = new Sequelize(dbUrl);
