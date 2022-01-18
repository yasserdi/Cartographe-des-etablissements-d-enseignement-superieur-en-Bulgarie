var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DecoupageadministratifBulgarie_1 = new ol.format.GeoJSON();
var features_DecoupageadministratifBulgarie_1 = format_DecoupageadministratifBulgarie_1.readFeatures(json_DecoupageadministratifBulgarie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DecoupageadministratifBulgarie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DecoupageadministratifBulgarie_1.addFeatures(features_DecoupageadministratifBulgarie_1);
var lyr_DecoupageadministratifBulgarie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DecoupageadministratifBulgarie_1, 
                style: style_DecoupageadministratifBulgarie_1,
                interactive: false,
                title: '<img src="styles/legend/DecoupageadministratifBulgarie_1.png" /> Decoupage administratif Bulgarie'
            });
var format_EtablissementBulgarie_2 = new ol.format.GeoJSON();
var features_EtablissementBulgarie_2 = format_EtablissementBulgarie_2.readFeatures(json_EtablissementBulgarie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EtablissementBulgarie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtablissementBulgarie_2.addFeatures(features_EtablissementBulgarie_2);cluster_EtablissementBulgarie_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_EtablissementBulgarie_2
});
var lyr_EtablissementBulgarie_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_EtablissementBulgarie_2, 
                style: style_EtablissementBulgarie_2,
                interactive: true,
                title: '<img src="styles/legend/EtablissementBulgarie_2.png" /> Etablissement Bulgarie'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DecoupageadministratifBulgarie_1.setVisible(true);lyr_EtablissementBulgarie_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DecoupageadministratifBulgarie_1,lyr_EtablissementBulgarie_2];
lyr_DecoupageadministratifBulgarie_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_EtablissementBulgarie_2.set('fieldAliases', {'Etablissement en Fr': 'Etablissement', 'Lieu': 'Lieu', 'Secteur': 'Secteur', 'Type d\'Etablissement': 'Type d\'Etablissement', 'CP': 'CP', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', 'Num': 'Num', 'Fax': 'Fax', 'Site': 'Site', 'Mail': 'Mail', 'field_13': 'field_13', });
lyr_DecoupageadministratifBulgarie_1.set('fieldImages', {'GID_0': 'Hidden', 'NAME_0': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'CC_1': 'Hidden', 'HASC_1': 'Hidden', });
lyr_EtablissementBulgarie_2.set('fieldImages', {'Etablissement en Fr': 'TextEdit', 'Lieu': 'TextEdit', 'Secteur': 'TextEdit', 'Type d\'Etablissement': 'TextEdit', 'CP': 'Hidden', 'Y': 'Hidden', 'X': 'Hidden', 'Adresse': 'TextEdit', 'Num': 'TextEdit', 'Fax': 'TextEdit', 'Site': 'TextEdit', 'Mail': 'TextEdit', 'field_13': 'Hidden', });
lyr_DecoupageadministratifBulgarie_1.set('fieldLabels', {});
lyr_EtablissementBulgarie_2.set('fieldLabels', {'Etablissement en Fr': 'inline label', 'Lieu': 'inline label', 'Secteur': 'inline label', 'Type d\'Etablissement': 'inline label', 'Adresse': 'inline label', 'Num': 'inline label', 'Fax': 'inline label', 'Site': 'inline label', 'Mail': 'inline label', });
lyr_EtablissementBulgarie_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});