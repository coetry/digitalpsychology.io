export default function convertRaster(size, rasterString) {
    if (!rasterString) return [];

    return rasterString
        // Split rows
        .split('|')
        .map((row, rowNumber) => {
            // Split columns
            return row.split(',')
                // Cast string values to integers
                .map((value) => parseInt(value, 10))
                // Calculate index in raster
                .map((value) => value + (rowNumber * size));
        })
        // Flatten
        .reduce((a, b) => a.concat(b));
}
