var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });
var format_MALAYSIA_1 = new ol.format.GeoJSON();
var features_MALAYSIA_1 = format_MALAYSIA_1.readFeatures(json_MALAYSIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALAYSIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALAYSIA_1.addFeatures(features_MALAYSIA_1);
var lyr_MALAYSIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALAYSIA_1, 
                style: style_MALAYSIA_1,
                popuplayertitle: 'MALAYSIA',
                interactive: true,
    title: 'MALAYSIA<br />\
    <img src="styles/legend/MALAYSIA_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/MALAYSIA_1_1.png" /> 1 - 11<br />\
    <img src="styles/legend/MALAYSIA_1_2.png" /> 11 - 32<br />\
    <img src="styles/legend/MALAYSIA_1_3.png" /> 32 - 108<br />\
    <img src="styles/legend/MALAYSIA_1_4.png" /> 108 - 2204<br />'
        });

lyr_F4Map2D_0.setVisible(true);lyr_MALAYSIA_1.setVisible(true);
var layersList = [lyr_F4Map2D_0,lyr_MALAYSIA_1];
lyr_MALAYSIA_1.set('fieldAliases', {'state': 'state', 'ADM1_PCODE': 'ADM1_PCODE', 'country': 'country', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'year_2021': 'year_2021', 'cases': 'cases', 'years_2022': 'years_2022', 'Field': 'Field', });
lyr_MALAYSIA_1.set('fieldImages', {'state': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'country': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'year_2021': 'TextEdit', 'cases': 'TextEdit', 'years_2022': 'TextEdit', 'Field': 'TextEdit', });
lyr_MALAYSIA_1.set('fieldLabels', {'state': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'country': 'inline label - visible with data', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'year_2021': 'inline label - visible with data', 'cases': 'hidden field', 'years_2022': 'inline label - visible with data', 'Field': 'hidden field', });
lyr_MALAYSIA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});