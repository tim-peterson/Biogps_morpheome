select * from `TM_SP-10_citations_or_less_genes_in_Broad_hORF_library` where GWAS_exists >=1 and GWAS_exists !=27035 and GWAS_exists !=27047 and `Expression_clone_id_LRsuccess` != 'Failed LR reaction'

select hORF_library_BROAD.* from `top_cited_300_citations` c
left join hORF_library_BROAD
on c.name=hORF_library_BROAD.`Gene symbol` where `Expression_clone_id_LRsuccess` != 'Failed LR reaction'

select * from `autism_39_wigler` c
left join aliases
on c.name=aliases.name group by gene_id


select hORF_library_BROAD.* from (select aliases.name from `3x_higher_10_citations_or_less` c
left join 
`aliases` 
on c.gene_name=aliases.name) p
left join
hORF_library_BROAD
on p.name=hORF_library_BROAD.`Gene symbol` where `Expression_clone_id_LRsuccess` != 'Failed LR reaction' group by `Entry_clone_id`

select * from hORF_library where `GeneSymbol` like "%wnt%"

select * from hORF_Broad_to_order_022817 where `Gene symbol0` like "%tnf%" group by `Entry_clone_id`

select hORF_library_BROAD.* from (select name, geneSymbol, citation_count, gene_count, ji_top1000genes.numCitations from `top_cited_300_citations`
right join ji_top1000genes
on `top_cited_300_citations`.name = ji_top1000genes.geneSymbol where name is null order by numCitations desc) p
left join
hORF_library_BROAD
on p.geneSymbol=hORF_library_BROAD.`Gene symbol` where `Expression_clone_id_LRsuccess` != 'Failed LR reaction' group by `Entry_clone_id` order by `Gene symbol`

select * from `3x_higher_than_other_cells_v2` t
join aliases
on t.`Gene Symbol`=aliases.`name` where citation_count <= 10 and gene_count <= 10 group by gene_id


select hORF_library_BROAD.* from `top_cited_300_citations` c
left join hORF_library_BROAD
on c.name=hORF_library_BROAD.`Gene symbol` where `Expression_clone_id_LRsuccess` != 'Failed LR reaction'