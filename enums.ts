// In TypeScript, an enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

// For example, let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", and "snowy". You could define an enum like this:

enum WeatherConditions {
    sunny,
    rainy,
    windy,
    snowy,
    warm,
}
// we can also specify the values
// sunny = "sunny"
enum WeatherConditions2 {
    sunny = "sunny",
    rainy = "rainy",
    windy = "windy",
    snowy = "snowy",
    warm = "warm",
}
console.log(WeatherConditions2.sunny);
