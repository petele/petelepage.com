module Jekyll
 class RelatedByTags < Generator
    safe true
 
    def generate (site)
      site.posts.each do |post|
        counter = Hash.new(0)
        post.tags.each do |tag|
          site.tags[tag].reject { |p| p == post }.each do |p|
            counter[p] += 1
          end
        end
        related = counter.sort_by{ |k,v| v }.reverse.map{ |a| a[0] }
        post.data['related_posts'] = related.count > 0 ? related : nil
      end
    end
  end
end