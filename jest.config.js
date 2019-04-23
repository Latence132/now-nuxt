module.exports = {
  transform: {
    "^.+.vue$": "vue-jest",
    "^.+.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "json", "vue"],
  transformIgnorePatterns: [
    "node_modules/(?!(vue-videobg)/)"
  ],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^~~/(.*)$": "<rootDir>/$1"
  },
  collectCoverageFrom: [
    "<rootDir>/components/*.vue",
    "<rootDir>/pages/*.vue"
  ]
  
}
