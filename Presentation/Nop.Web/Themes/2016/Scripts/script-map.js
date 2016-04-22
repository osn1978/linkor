$(document).ready(function(){

		    	// Создает экземпляр карты
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);  
        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(30.50,50.45), 12);
        map.enableScrollZoom();

		});