using KmlToGeoJson;
var kmlFiles = Directory.GetFiles("kml", "*.kml");

foreach (var kmlFile in kmlFiles)
{
    var kml = File.ReadAllText(kmlFile);
    var json = KmlToGeoJsonConverter.FromKml(kml);
    Directory.CreateDirectory("json");

    var outputFilePath = Path.Combine("json", Path.GetFileNameWithoutExtension(kmlFile) + ".geojson");

    File.WriteAllText(outputFilePath, json);
}
