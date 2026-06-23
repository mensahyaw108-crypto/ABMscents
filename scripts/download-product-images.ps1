$downloads = @(
  @{
    Url = "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce8a7cdf/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sh=800&sm=fit&sw=800"
    File = "images/web-the-ordinary-niacinamide.png"
  },
  @{
    Url = "https://africa.cerave.com/en/-/media/Project/Loreal/BrandSites/CeraVe/Master/AfricaHub/French/New-Product-Images/Moisturising-Cream-Winner-Logo-New.webp"
    File = "images/web-cerave-moisturising-cream.webp"
  },
  @{
    Url = "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/products/eye-makeup/mascara/lash-sensational-washable-mascara/very-black/041554420173_1.jpg?rev=7d4e48c1a478421a9fa61420ca2d90e8"
    File = "images/web-maybelline-lash-sensational.jpg"
  },
  @{
    Url = "https://soldejaneiro.com/cdn/shop/files/Cheriosa62_perfume_Mist_240mL_Sol_de_Janeiro_0-webp.webp?v=1720730189&width=1600"
    File = "images/web-sol-de-janeiro-cheirosa.webp"
  },
  @{
    Url = "https://www.laroche-posay.co/-/media/project/loreal/brand-sites/lrp/americas/co/products/anthelios/anthelios-uvmune-400/3337875797597/lrpProductPageSunAntheliosUVMune400FluidSPspf503337875797597frontpng.png"
    File = "images/web-la-roche-posay-anthelios.png"
  },
  @{
    Url = "https://www.mixa.fr/-/media/project/loreal/brand-sites/mixa/emea/fr/produits/bodycare/lait-corps-urea-cica-repair/mixa-lait-corps-urea-cica-repair-flacon-pompe-hd-packshot.png"
    File = "images/web-mixa-urea-cica.png"
  },
  @{
    Url = "https://www.redken.com/-/media/project/loreal/brand-sites/redken/americas/us/products/haircare/acidic-bonding-concentrate/acidic-bonding-concentrate-shampoo/rkn-abc-shampoo-500ml.png"
    File = "images/web-redken-acidic-bonding.png"
  },
  @{
    Url = "https://www.redken.com/-/media/project/loreal/brand-sites/redken/americas/us/products/haircare/acidic-bonding-concentrate/acidic-bonding-concentrate-shampoo/rkn-abc-shampoo-300ml.png"
    File = "images/web-redken-acidic-bonding-300.png"
  },
  @{
    Url = "https://images.ctfassets.net/u0dys2nue8ye/79F59OoK7KpTzn4bDTjfXH/bb486994fe7d2c366315e62eb589c125/OLAPLEX-NO.3-HAIR-PERFECTOR-250ml.png?fm=webp"
    File = "images/web-olaplex-no3.webp"
  },
  @{
    Url = "https://cdn.shopify.com/s/files/1/0434/1661/files/No.3_100mL_Standalone.jpg?v=1757683028"
    File = "images/web-olaplex-no3.jpg"
  },
  @{
    Url = "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/f/b/f/e351d15d3ac3444bbff18ae6b3351f6d-screen.jpg"
    File = "images/web-nivea-sun-bronze.jpg"
  },
  @{
    Url = "https://www.mustelausa.com/cdn/shop/files/mustela_gentle_cleansing_gel_packshot_500ml_2024_ef6a43e5-3c0b-4fd3-8af6-81efd9a15b4c.png?v=1741711360"
    File = "images/web-mustela-gentle-cleansing-gel.png"
  },
  @{
    Url = "https://www.cosrx.com/cdn/shop/files/AdvancedSnail96MucinPowerEssence100ml.jpg?v=1740615599"
    File = "images/web-cosrx-snail-mucin.jpg"
  },
  @{
    Url = "https://cdn11.bigcommerce.com/s-8a17zsy6xl/images/stencil/1500x1500/products/129/326/OralB_SensitiveGumCare_3ct_Carton_ReplacementBrushHeads_3D_Front_PDP__41483.1755193815.png?c=1"
    File = "images/web-oralb-sensitive-heads.png"
  }
)

foreach ($item in $downloads) {
  try {
    Invoke-WebRequest -Uri $item.Url -OutFile $item.File -UseBasicParsing
    Write-Output "Downloaded $($item.File)"
  } catch {
    Write-Output "FAILED $($item.File): $($_.Exception.Message)"
  }
}
