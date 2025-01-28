$fonts = @(
    @{
        Name = "OpenSans-Regular"
        URL = "https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2"
    },
    @{
        Name = "OpenSans-SemiBold"
        URL = "https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu0SC55K5gw.woff2"
    },
    @{
        Name = "OpenSans-Bold"
        URL = "https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu0SC55K5gw.woff2"
    }
)

$outputPath = "react/src/assets/fonts"

foreach ($font in $fonts) {
    $outputFile = Join-Path $outputPath "$($font.Name).woff2"
    Invoke-WebRequest -Uri $font.URL -OutFile $outputFile
    Write-Host "Downloaded $($font.Name)"
}
