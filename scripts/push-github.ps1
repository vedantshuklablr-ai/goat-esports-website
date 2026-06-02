# Run after: gh auth login
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "Creating GitHub repo and pushing..." -ForegroundColor Cyan
& "C:\Program Files\GitHub CLI\gh.exe" repo create goat-esports-website --public --source=. --remote=origin --push

Write-Host ""
Write-Host "Done! Enable GitHub Pages:" -ForegroundColor Green
Write-Host "  Repo Settings -> Pages -> Source: GitHub Actions"
Write-Host ""
& "C:\Program Files\GitHub CLI\gh.exe" repo view --web
